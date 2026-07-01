/* =========================================================================
   FREQ-UTIL — window.FreqUtil
   Load-time glue between the bundled frequency list (window.FREQ) and the
   app's own vocabulary (NOUNS / VERBS / CARDS) + FSRS memory (PROG).

   Responsibilities:
     1. normalise lemmas so "der Mann", "Mann", "MANN." all collapse to "mann"
     2. rankOf(de)  -> the corpus-frequency rank of a word, or null
     3. vocab lookup -> for a FREQ lemma, find the matching study CARD (the only
        thing FSRS can actually schedule) plus display info (English, article)
     4. coverage(topN) -> honest "how much everyday speech can I follow?" number,
        driven by REAL FSRS stability (no fake points)
     5. pin helpers -> queue an unknown top word into the existing study deck

   OFFLINE-FIRST: pure in-memory computation over already-bundled globals.
   Nothing is fetched. Everything is built lazily on first use and cached.

   THE COVERAGE MATH (documented so it stays honest):
     Word frequencies follow Zipf's law: the r-th most frequent word appears
     with probability ~ K/r. The share of running speech covered by KNOWING a
     set S of words is therefore  Σ_{r in S} K/r.
     We calibrate K so that knowing ALL of the top 1000 = 80% of speech
     (the standard rule of thumb):  Σ_{r=1..1000} K/r = K·H(1000) = 0.80
     => K = 0.80 / H(1000),  H(1000) ≈ 7.4855  => K ≈ 0.10687.
     This gives sensible anchors: top 100 ≈ 55%, top 1000 = 80%, top 2000 ≈ 87%.
     A word counts as KNOWN only when its mapped FSRS card has stability
     >= STRONG_STABILITY_DAYS — i.e. genuinely durable memory, not just "seen".
   ========================================================================= */
(function () {
  "use strict";

  // ---- named constants (single source of truth) -------------------------
  var STRONG_STABILITY_DAYS = 21;   // FSRS stability >= this = "festgesetzt"
  var SPEECH_COVERAGE_TOP1000 = 0.80; // knowing all top-1000 = 80% of speech

  // ---- harmonic number H(n) = Σ 1/r --------------------------------------
  function harmonic(n) {
    var h = 0;
    for (var r = 1; r <= n; r++) h += 1 / r;
    return h;
  }
  var K = SPEECH_COVERAGE_TOP1000 / harmonic(1000); // ≈ 0.10687

  // ---- lemma normalisation ----------------------------------------------
  var LEAD_ARTICLE = /^(der|die|das|den|dem|des|ein|eine|einen|einem|einer|eines)\s+/;
  function normalize(de) {
    if (!de) return "";
    var s = String(de).trim().toLowerCase();
    s = s.replace(LEAD_ARTICLE, "");          // drop a leading article
    s = s.replace(/[.,;:!?"'»«]+$/g, "");      // drop trailing punctuation
    s = s.replace(/\s+/g, " ").trim();
    return s;
  }

  // ---- lazy indexes ------------------------------------------------------
  var _freqByLemma = null;  // lemma -> rank
  var _vocabByLemma = null; // lemma -> { en, art, cardId }

  function freqByLemma() {
    if (_freqByLemma) return _freqByLemma;
    _freqByLemma = Object.create(null);
    var list = window.FREQ || [];
    for (var i = 0; i < list.length; i++) {
      var lem = normalize(list[i].de);
      // keep the BEST (lowest) rank if a lemma somehow appears twice
      if (_freqByLemma[lem] == null || list[i].rank < _freqByLemma[lem]) {
        _freqByLemma[lem] = list[i].rank;
      }
    }
    return _freqByLemma;
  }

  function vocabByLemma() {
    if (_vocabByLemma) return _vocabByLemma;
    _vocabByLemma = Object.create(null);

    function put(lem, info) {
      if (!lem) return;
      var cur = _vocabByLemma[lem];
      if (!cur) { _vocabByLemma[lem] = info; return; }
      // merge — never lose a cardId, fill missing display fields
      if (!cur.cardId && info.cardId) cur.cardId = info.cardId;
      if (!cur.en && info.en) cur.en = info.en;
      if (!cur.art && info.art) cur.art = info.art;
    }

    // NOUNS: article + English, no FSRS card of their own
    var nouns = window.NOUNS || [];
    for (var n = 0; n < nouns.length; n++) {
      put(normalize(nouns[n].de), { en: nouns[n].en, art: nouns[n].art, cardId: null });
    }
    // VERBS: English only
    var verbs = window.VERBS || [];
    for (var v = 0; v < verbs.length; v++) {
      put(normalize(verbs[v].inf), { en: verbs[v].en, art: null, cardId: null });
    }
    // CARDS: the ONLY learnable/FSRS-schedulable units — attach the cardId
    var cards = window.CARDS || [];
    for (var c = 0; c < cards.length; c++) {
      var card = cards[c];
      var lem = normalize(card.de);
      var art = null;
      var m = /^(der|die|das)\s+/i.exec(String(card.de).trim());
      if (m) art = m[1].toLowerCase();
      put(lem, { en: card.en, art: art, cardId: card.id });
    }
    return _vocabByLemma;
  }

  // ---- public lookups ----------------------------------------------------
  function rankOf(de) {
    var r = freqByLemma()[normalize(de)];
    return r == null ? null : r;
  }
  function info(de) {              // display + cardId for a lemma, or null
    return vocabByLemma()[normalize(de)] || null;
  }

  // ---- FSRS "strong?" test -----------------------------------------------
  // states = PROG.loadStates() => { "cardId:dir": revivedCard }
  // A card is strong if EITHER direction has stability >= threshold.
  function isStrongCard(states, cardId) {
    if (!cardId || !states) return false;
    var dirs = ["recognition", "production"];
    for (var i = 0; i < dirs.length; i++) {
      var st = states[cardId + ":" + dirs[i]];
      if (st && typeof st.stability === "number" &&
          st.stability >= STRONG_STABILITY_DAYS) {
        return true;
      }
    }
    return false;
  }

  // ---- coverage over the top-N slice ------------------------------------
  // Returns:
  //   total      number of FREQ words in the top-N slice
  //   learnable  how many of those map to a study card (could be learned here)
  //   known      how many of those are FSRS-strong right now
  //   speechPct  Σ K/rank over the KNOWN words, as a 0..100 number
  //   knownIds   { cardId: true } for the known cards (for UI ticks)
  function coverage(topN) {
    topN = topN || 1000;
    var states = (window.PROG && PROG.loadStates) ? PROG.loadStates() : {};
    var vocab = vocabByLemma();
    var list = window.FREQ || [];
    var total = 0, learnable = 0, known = 0, pct = 0;
    var knownIds = Object.create(null);

    for (var i = 0; i < list.length; i++) {
      var entry = list[i];
      if (entry.rank > topN) continue;
      total++;
      var vi = vocab[normalize(entry.de)];
      if (vi && vi.cardId) {
        learnable++;
        if (isStrongCard(states, vi.cardId)) {
          known++;
          knownIds[vi.cardId] = true;
          pct += K / entry.rank;   // Zipf share for this rank
        }
      }
    }
    return {
      total: total,
      learnable: learnable,
      known: known,
      speechPct: Math.round(pct * 1000) / 10, // one decimal, 0..100
      knownIds: knownIds
    };
  }

  // ---- pin helpers (reuse the existing study deck, no parallel system) ---
  var PIN_KEY = "studyPinned";
  function pinnedIds() {
    var arr = (window.DE && DE.load) ? DE.load(PIN_KEY, []) : [];
    return Array.isArray(arr) ? arr : [];
  }
  function pin(cardId) {
    if (!cardId || !window.DE) return false;
    var arr = pinnedIds();
    if (arr.indexOf(cardId) === -1) { arr.push(cardId); DE.store(PIN_KEY, arr); }
    return true;
  }
  function unpin(cardId) {
    if (!window.DE) return;
    var arr = pinnedIds().filter(function (id) { return id !== cardId; });
    DE.store(PIN_KEY, arr);
  }
  // Drop pins whose card now has ANY FSRS state (it's in the deck for real).
  function prunePins(states) {
    if (!window.DE) return pinnedIds();
    states = states || {};
    var kept = pinnedIds().filter(function (id) {
      return !states[id + ":recognition"] && !states[id + ":production"];
    });
    DE.store(PIN_KEY, kept);
    return kept;
  }

  window.FreqUtil = {
    STRONG_STABILITY_DAYS: STRONG_STABILITY_DAYS,
    SPEECH_COVERAGE_TOP1000: SPEECH_COVERAGE_TOP1000,
    normalize: normalize,
    rankOf: rankOf,
    info: info,
    coverage: coverage,
    isStrongCard: isStrongCard,
    pin: pin,
    unpin: unpin,
    pinnedIds: pinnedIds,
    prunePins: prunePins
  };
})();
