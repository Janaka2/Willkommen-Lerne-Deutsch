/* =========================================================================
   Shared progress + FSRS engine — window.PROG
   Used by the guided session (today.html) and the dashboard (progress.html),
   and the FSRS study page logs reviews here too. Everything is read from /
   written to the SAME localStorage keys, so all pages share one honest state:

     de_fsrs       { "cardId:dir": <ts-fsrs Card> }   (due/last_review are ISO strings)
     de_reviewLog  { reviewed, remembered, days: { "YYYY-MM-DD": {reviewed,remembered,new} } }
     de_sessions   { "YYYY-MM-DD": true }              (guided sessions completed)
     de_streak, de_lastActiveDay, de_cardsToday        (already used site-wide)

   No network. Requires the ts-fsrs UMD global (window.FSRS) only for the
   scheduling helpers; the pure stats helpers work without it.
   ========================================================================= */
(function () {
  "use strict";

  var DIRS = ["recognition", "production"];

  function todayStr() { return new Date().toISOString().slice(0, 10); }

  /* ---------- FSRS scheduler (lazy: needs window.FSRS) ---------- */
  var _f = null;
  function engine() {
    if (_f) return _f;
    if (!window.FSRS) return null;
    _f = window.FSRS.fsrs(window.FSRS.generatorParameters({
      enable_fuzz: true, request_retention: 0.90
    }));
    return _f;
  }

  /* ---------- Card states ---------- */
  function reviveCard(s) {
    var c = Object.assign({}, s);
    if (c.due) c.due = new Date(c.due);
    if (c.last_review) c.last_review = new Date(c.last_review);
    return c;
  }
  function loadStates() {
    var raw = DE.load("fsrs", {});
    var out = {};
    Object.keys(raw).forEach(function (k) { out[k] = reviveCard(raw[k]); });
    return out;
  }
  function saveStates(states) { DE.store("fsrs", states); }

  /* All study items (two directions per card). */
  function studyItems() {
    var items = [];
    (window.CARDS || []).forEach(function (c) {
      DIRS.forEach(function (dir) { items.push({ key: c.id + ":" + dir, card: c, dir: dir }); });
    });
    return items;
  }

  function isNew(states, key) { return !states[key]; }
  function isDue(states, key) {
    var s = states[key];
    return !!s && s.due.getTime() <= Date.now();
  }

  /* Preview the four ratings for a key → ts-fsrs RecordLog (keyed by Rating). */
  function preview(states, key) {
    var f = engine();
    if (!f) return null;
    var base = states[key] || window.FSRS.createEmptyCard(new Date());
    return f.repeat(reviveCard(base), new Date());
  }

  /* Apply a rating: mutate+save states, log the review, bump cardsToday. */
  function applyRating(states, key, rating, wasNew) {
    var rec = preview(states, key);
    if (!rec) return states;
    states[key] = rec[rating].card;
    saveStates(states);
    var Again = window.FSRS ? window.FSRS.Rating.Again : 1;
    logReview(rating !== Again, wasNew);
    DE.store("cardsToday", DE.load("cardsToday", 0) + 1);
    return states;
  }

  /* ---------- Review log (honest retention) ---------- */
  function logReview(remembered, wasNew) {
    var log = DE.load("reviewLog", { reviewed: 0, remembered: 0, days: {} });
    log.reviewed = (log.reviewed || 0) + 1;
    if (remembered) log.remembered = (log.remembered || 0) + 1;
    var d = todayStr();
    var day = log.days[d] || { reviewed: 0, remembered: 0, "new": 0 };
    day.reviewed++;
    if (remembered) day.remembered++;
    if (wasNew) day["new"]++;
    log.days[d] = day;
    DE.store("reviewLog", log);
  }

  /* ---------- Streak (same rule as the homepage) ---------- */
  function touchToday() {
    var streak = DE.load("streak", 0);
    var last = DE.load("lastActiveDay", "");
    var today = todayStr();
    if (last !== today) {
      var yest = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      streak = (last === yest) ? streak + 1 : 1;
      DE.store("streak", streak);
      DE.store("lastActiveDay", today);
      DE.store("cardsToday", 0);
    }
    return streak;
  }

  function markSessionDone() {
    var s = DE.load("sessions", {});
    s[todayStr()] = true;
    DE.store("sessions", s);
  }

  /* ---------- Aggregate stats for the dashboard ---------- */
  function stats() {
    var states = loadStates();
    var items = studyItems();
    var due = 0, newAvail = 0;
    var seenIds = {}, strongIds = {};
    // stability buckets (memory strength), counted per study item (memory)
    var buckets = [0, 0, 0, 0, 0]; // <1d, 1-7d, 7-30d, 30-90d, >90d
    var stabSum = 0, stabCount = 0;

    items.forEach(function (it) {
      var s = states[it.key];
      if (!s) { newAvail++; return; }
      if (s.due.getTime() <= Date.now()) due++;
      var cardId = it.key.split(":")[0];
      // "seen" = has been reviewed at least once (state >= Learning)
      if ((s.state || 0) >= 1 || (s.reps || 0) > 0) seenIds[cardId] = true;
      var stab = s.stability || 0;
      if (s.state === 2) { stabSum += stab; stabCount++; } // Review cards drive the curve
      if (stab >= 21) strongIds[cardId] = true;
      if (stab < 1) buckets[0]++;
      else if (stab < 7) buckets[1]++;
      else if (stab < 30) buckets[2]++;
      else if (stab < 90) buckets[3]++;
      else buckets[4]++;
    });

    var log = DE.load("reviewLog", { reviewed: 0, remembered: 0, days: {} });
    var retention = log.reviewed ? Math.round((log.remembered / log.reviewed) * 100) : null;

    return {
      streak: DE.load("streak", 0),
      due: due,
      newAvail: newAvail,
      cardsToday: DE.load("cardsToday", 0),
      totalCards: (window.CARDS || []).length,
      wordsSeen: Object.keys(seenIds).length,
      wordsStrong: Object.keys(strongIds).length,
      retention: retention,
      reviewedTotal: log.reviewed || 0,
      avgStability: stabCount ? stabSum / stabCount : 0,
      buckets: buckets,
      days: log.days || {},
      sessions: DE.load("sessions", {})
    };
  }

  /* Average-card forgetting curve value at t days, FSRS power form.
     R(t) = (1 + FACTOR * t / S)^DECAY  (FSRS-6 defaults). */
  function retrievability(t, S) {
    if (!S || S <= 0) return 0;
    var DECAY = -0.5, FACTOR = Math.pow(0.9, 1 / DECAY) - 1; // = 19/81 ≈ 0.2346
    return Math.pow(1 + FACTOR * (t / S), DECAY);
  }

  window.PROG = {
    todayStr: todayStr,
    loadStates: loadStates,
    saveStates: saveStates,
    studyItems: studyItems,
    isNew: isNew,
    isDue: isDue,
    preview: preview,
    applyRating: applyRating,
    logReview: logReview,
    touchToday: touchToday,
    markSessionDone: markSessionDone,
    stats: stats,
    retrievability: retrievability
  };
})();
