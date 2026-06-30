/* =========================================================
   Shared app logic: navigation, theme, audio (TTS), storage.
   No frameworks, no network — works fully offline (file://).
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Path helper (root vs /pages/) ---------- */
  var inPages = location.pathname.indexOf("/pages/") !== -1;
  var BASE = inPages ? "../" : "";

  /* Navigation is grouped into 5 sections so the top bar stays focused
     (≤6 top-level items). Each group opens a small disclosure menu. */
  var NAV_GROUPS = [
    { label: "Heute lernen", items: [
      { key: "today", label: "Heute lernen", href: "pages/today.html" },
      { key: "plan",  label: "Tagesplan",    href: "pages/plan.html" }
    ]},
    { label: "Verstehen", items: [
      { key: "golden-rules", label: "Goldene Regeln", href: "pages/golden-rules.html" },
      { key: "grammar",      label: "Grammatik",      href: "pages/grammar.html" },
      { key: "cases",        label: "Fälle (Cases)",  href: "pages/cases.html" },
      { key: "fragen",       label: "W-Fragen",       href: "pages/fragen.html" },
      { key: "basics",       label: "A1 Grundlagen",  href: "pages/basics.html" }
    ]},
    { label: "Wortschatz", items: [
      { key: "nouns",     label: "Nomen",   href: "pages/nouns.html" },
      { key: "verbs",     label: "Verben",  href: "pages/verbs.html" },
      { key: "sentences", label: "Sätze",   href: "pages/sentences.html" },
      { key: "future",    label: "Zukunft", href: "pages/future.html" }
    ]},
    { label: "Üben", items: [
      { key: "study",      label: "Lernkarten (FSRS)",    href: "pages/study.html" },
      { key: "flashcards", label: "Karteikarten",         href: "pages/flashcards.html" },
      { key: "quiz",       label: "Quiz",                 href: "pages/quiz.html" },
      { key: "listening",  label: "Hören & Nachsprechen", href: "pages/listening.html" },
      { key: "speaking",   label: "Sprechen",             href: "pages/speaking.html" },
      { key: "unlock",     label: "🔓 Sprechen freischalten", href: "pages/unlock.html" },
      { key: "dialogs",    label: "Dialoge",              href: "pages/dialogs.html" }
    ]},
    { label: "Mehr", items: [
      { key: "swiss-german", label: "🇨🇭 Schweizerdeutsch", href: "pages/swiss-german.html" },
      { key: "progress",     label: "Fortschritt",          href: "pages/progress.html" }
    ]}
  ];

  function buildNav() {
    var current = document.body.getAttribute("data-page") || "";
    var header = document.createElement("header");
    header.className = "site-header";

    var groupsHtml = NAV_GROUPS.map(function (g) {
      var hasActive = g.items.some(function (n) { return n.key === current; });
      var itemsHtml = g.items.map(function (n) {
        var active = n.key === current ? " active" : "";
        return '<a class="nav-item' + active + '" href="' + BASE + n.href + '">' + n.label + "</a>";
      }).join("");
      return '<div class="nav-group' + (hasActive ? " has-active" : "") + '">' +
               '<button class="nav-group-btn" aria-expanded="false">' + g.label +
                 ' <span class="caret" aria-hidden="true">▾</span></button>' +
               '<div class="nav-menu">' + itemsHtml + "</div>" +
             "</div>";
    }).join("");

    header.innerHTML =
      '<div class="nav">' +
        '<a class="brand" href="' + BASE + 'index.html"><span class="flag">🇩🇪</span> Deutsch A2</a>' +
        '<button class="nav-burger" aria-label="Menü">☰</button>' +
        '<nav class="nav-links">' + groupsHtml + "</nav>" +
        '<button class="focus-toggle" aria-label="Lesemodus" aria-pressed="false" title="Lesemodus (weniger Ablenkung)">🔎 Fokus</button>' +
        '<button class="theme-toggle" aria-label="Theme wechseln">🌙 Dunkel</button>' +
      "</div>";

    document.body.insertBefore(header, document.body.firstChild);

    var burger = header.querySelector(".nav-burger");
    var links = header.querySelector(".nav-links");
    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      links.classList.toggle("open");
    });

    var groups = Array.prototype.slice.call(header.querySelectorAll(".nav-group"));
    function closeAll() {
      groups.forEach(function (g) {
        g.classList.remove("open");
        g.querySelector(".nav-group-btn").setAttribute("aria-expanded", "false");
      });
    }
    groups.forEach(function (group) {
      var btn = group.querySelector(".nav-group-btn");
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var wasOpen = group.classList.contains("open");
        closeAll();
        if (!wasOpen) {
          group.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
    // Click anywhere else closes any open dropdown.
    document.addEventListener("click", closeAll);

    var toggle = header.querySelector(".theme-toggle");
    toggle.addEventListener("click", toggleTheme);
    refreshThemeButton();

    var focusBtn = header.querySelector(".focus-toggle");
    focusBtn.addEventListener("click", toggleFocus);
    refreshFocusButton();
  }

  function buildFooter() {
    var f = document.createElement("footer");
    f.className = "footer";
    f.innerHTML =
      "Deutsch A2 — deine private, offline Lernseite. " +
      "Alles wird nur in deinem Browser gespeichert. " +
      '<br>Übe täglich. <strong>Wiederholung ist alles.</strong> 💪';
    document.body.appendChild(f);
  }

  /* ---------- Theme ---------- */
  function currentTheme() {
    return localStorage.getItem("de_theme") || "light";
  }
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
  }
  function refreshThemeButton() {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    btn.textContent = currentTheme() === "dark" ? "☀️ Hell" : "🌙 Dunkel";
  }
  function toggleTheme() {
    var t = currentTheme() === "dark" ? "light" : "dark";
    localStorage.setItem("de_theme", t);
    applyTheme(t);
    refreshThemeButton();
  }
  applyTheme(currentTheme()); // apply ASAP

  /* ---------- Focus / reading mode ----------
     Site-wide distraction-free toggle. Persisted under de_focusMode so the
     choice follows the learner across pages. Only adds/removes a body class —
     all behaviour lives in CSS, so it never hides anything interactive widgets
     depend on (it dims chrome, it doesn't remove content). */
  function focusOn() { return localStorage.getItem("de_focusMode") === "1"; }
  function applyFocus(on) {
    if (document.body) document.body.classList.toggle("focus-mode", on);
  }
  function refreshFocusButton() {
    var b = document.querySelector(".focus-toggle");
    if (!b) return;
    var on = focusOn();
    b.textContent = on ? "🔎 Fokus: an" : "🔎 Fokus";
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  }
  function toggleFocus() {
    var on = !focusOn();
    localStorage.setItem("de_focusMode", on ? "1" : "0");
    applyFocus(on);
    refreshFocusButton();
  }

  /* ---------- Collapsible topics + sticky mini-TOC ----------
     Progressive disclosure for long single-scroll pages. Opt in by setting
     body[data-collapse="h2"]: every top-level <h2> (and the content up to the
     next <h2>/<hr>/.btn-row) becomes a collapsed <details class="topic">.
     A pre-existing .toc is turned into a sticky, collapsible jump menu; its
     links (and any #cheat-sheet links) open the target topic and scroll to it. */
  function initCollapsibleTopics() {
    if (!document.body || document.body.getAttribute("data-collapse") !== "h2") return;
    var main = document.querySelector("main");
    if (!main) return;

    var kids = Array.prototype.slice.call(main.children);
    var made = 0;
    for (var i = 0; i < kids.length; i++) {
      var h2 = kids[i];
      if (!h2 || h2.tagName !== "H2") continue;

      var details = document.createElement("details");
      details.className = "topic";
      if (h2.id) { details.id = h2.id; h2.removeAttribute("id"); }

      var summary = document.createElement("summary");
      summary.innerHTML =
        '<span class="topic-t">' + h2.innerHTML + "</span>" +
        '<span class="topic-caret" aria-hidden="true">▾</span>';
      details.appendChild(summary);

      var bodyWrap = document.createElement("div");
      bodyWrap.className = "topic-body";
      var j = i + 1;
      while (j < kids.length) {
        var n = kids[j];
        if (n.tagName === "H2" || n.tagName === "HR" ||
            (n.classList && n.classList.contains("btn-row")) ||
            (n.getAttribute && n.getAttribute("data-keep") !== null && n.hasAttribute("data-keep"))) break;
        bodyWrap.appendChild(n); // moves n out of main into the topic
        j++;
      }
      details.appendChild(bodyWrap);
      main.insertBefore(details, h2);
      main.removeChild(h2);
      made++;
      i = j - 1;
    }
    if (!made) return;

    // Turn an existing .toc into a sticky, collapsible jump menu.
    var toc = main.querySelector(".toc");
    if (toc) {
      toc.classList.add("toc-mini");
      var inner = document.createElement("div");
      inner.className = "toc-list";
      while (toc.firstChild) inner.appendChild(toc.firstChild);
      var d = document.createElement("details");
      d.className = "toc-d";
      var s = document.createElement("summary");
      s.textContent = "📑 Inhalt — zu einem Thema springen";
      d.appendChild(s);
      d.appendChild(inner);
      toc.appendChild(d);
    }

    function openTopic(id, scroll) {
      var t = document.getElementById(id);
      if (!t) return false;
      if (t.tagName === "DETAILS") t.open = true;
      var td = toc && toc.querySelector(".toc-d");
      if (td) td.open = false; // collapse the menu after a pick
      if (scroll) t.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    }

    // Wire every in-page hash link (TOC + cheat-sheet tiles) to open + scroll.
    main.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href").slice(1);
        if (!id || !document.getElementById(id)) return;
        e.preventDefault();
        openTopic(id, true);
        if (history.replaceState) history.replaceState(null, "", "#" + id);
      });
    });

    // Honour a hash on load (e.g. arriving at grammar.html#passiv).
    if (location.hash.length > 1) {
      var id0 = location.hash.slice(1);
      setTimeout(function () { openTopic(id0, true); }, 60);
    }
  }

  /* ---------- Audio (German text-to-speech) ---------- */
  var deVoice = null;
  /* Names/tags that mark a noticeably higher-quality German voice. Ranked top
     to bottom: quality variants first, then known-good named de-DE voices
     (Apple, then Microsoft). Lower-cased substring match. */
  var VOICE_QUALITY = [
    "enhanced", "premium", "neural", "natural",            // OS "better voice" tags
    "anna", "petra", "markus", "helena", "yannick", "viktor", // Apple de-DE
    "katja", "hedda", "stefan", "conrad"                   // Microsoft de-DE
  ];
  function pickVoice() {
    if (!window.speechSynthesis) return;
    var voices = speechSynthesis.getVoices() || [];
    var de = voices.filter(function (v) { return v.lang && v.lang.toLowerCase().indexOf("de") === 0; });
    if (!de.length) { deVoice = null; return; }

    // Offline-first: localService === false means the voice streams from a
    // server, so prefer everything else; only fall back to network voices if
    // they are literally the only German option.
    var offline = de.filter(function (v) { return v.localService !== false; });
    var pool = (offline.length ? offline : de).slice();

    function rank(v) {
      var name = (v.name || "").toLowerCase();
      for (var i = 0; i < VOICE_QUALITY.length; i++) {
        if (name.indexOf(VOICE_QUALITY[i]) !== -1) return i;
      }
      return VOICE_QUALITY.length;
    }
    // Prefer a higher-quality voice; tie-break to exact de-DE over de-AT/de-CH.
    pool.sort(function (a, b) {
      var r = rank(a) - rank(b);
      if (r) return r;
      return (a.lang.toLowerCase() === "de-de" ? 0 : 1) - (b.lang.toLowerCase() === "de-de" ? 0 : 1);
    });
    deVoice = pool[0] || null;
  }
  if (window.speechSynthesis) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }

  /* Speaking rate is user-adjustable and persisted, so every 🔊 button,
     flashcard, and the Listening Loop all use the same chosen speed. */
  function getRate() {
    var r = parseFloat(load("ttsRate", 0.9));
    return isNaN(r) ? 0.9 : Math.min(1.3, Math.max(0.5, r));
  }
  function setRate(r) { store("ttsRate", r); }

  /* speak(text[, opts]) — opts: { rate, onend, onstart }.
     Returns the utterance (or null if TTS unavailable) so callers can
     chain audio (Listening Loop / Shadowing) off the onend callback. */
  function speak(text, opts) {
    if (!window.speechSynthesis || !text) return null;
    opts = opts || {};
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    u.rate = opts.rate || getRate();
    if (deVoice) u.voice = deVoice;
    if (typeof opts.onstart === "function") u.onstart = opts.onstart;
    if (typeof opts.onend === "function") u.onend = opts.onend;
    speechSynthesis.speak(u);
    return u;
  }

  /* True if the browser can speak (used to degrade gracefully). */
  function canSpeak() { return !!window.speechSynthesis; }

  /* Make a small "speak" button element */
  function sayButton(text) {
    var b = document.createElement("button");
    b.className = "say";
    b.type = "button";
    b.title = "Anhören";
    b.setAttribute("aria-label", "Anhören: " + text);
    b.textContent = "🔊";
    b.addEventListener("click", function (e) {
      e.stopPropagation();
      speak(text);
    });
    return b;
  }

  /* Auto-wire any element with [data-say] -> appends a speak button.
     Or [data-say-self] -> clicking the element itself speaks its text. */
  function wireAudio(root) {
    root = root || document;
    root.querySelectorAll("[data-say]").forEach(function (el) {
      if (el.dataset.sayDone) return;
      el.dataset.sayDone = "1";
      el.appendChild(document.createTextNode(" "));
      el.appendChild(sayButton(el.getAttribute("data-say")));
    });
    root.querySelectorAll("[data-say-self]").forEach(function (el) {
      if (el.dataset.sayDone) return;
      el.dataset.sayDone = "1";
      el.style.cursor = "pointer";
      el.title = "Klicken zum Anhören";
      el.addEventListener("click", function () { speak(el.textContent.trim()); });
    });
  }

  /* ---------- Dual-coding media helper ----------
     Turns an "img" value into offline-safe markup. A value that ends in a
     known image extension (e.g. "img/hand.svg") becomes a lazily-loaded LOCAL
     <img> — never a remote URL; anything else is treated as a bundled emoji.
     extraClass lets callers size it (e.g. "lg" on the recall side). */
  function mediaMarkup(img, extraClass) {
    if (!img) return "";
    var cls = "meaning-img" + (extraClass ? " " + extraClass : "");
    if (/\.(svg|png|jpe?g|gif|webp|avif)$/i.test(img)) {
      return '<img class="' + cls + '" loading="lazy" alt="" src="' + img + '">';
    }
    return '<span class="meaning-emoji' + (extraClass ? " " + extraClass : "") + '">' + img + '</span>';
  }

  /* ---------- Sentence-building slots ----------
     A frame may carry an optional `slots` array. Each slot:
       { t:"Ich", role:"Subjekt", c:"nom", fill:true, ex:"Janaka" }
     - `t`    the visible token ("___" for a blank to fill)
     - `role` short label shown under the block
     - `c`    case tag ("nom"|"akk"|"dat"|"gen") → case colour, optional
     - `fill` this slot is the blank the learner completes
     - `ex`   example word used to build the model answer
     These helpers are the single source of truth so sentences.html and
     speaking.html render identical, colour-matched model answers. */
  function slotToken(s) { return (s.fill && s.ex) ? s.ex : s.t; }
  function slotTail(de) {
    var m = de && String(de).match(/[.?!]+$/);
    return m ? m[0] : "";
  }
  function slotsModelText(slots, de) {
    if (!slots || !slots.length) return "";
    var out = slots.map(slotToken).join(" ").replace(/\s+([.,!?;:])/g, "$1");
    return out + slotTail(de);
  }
  function slotsModelHtml(slots, de) {
    if (!slots || !slots.length) return "";
    var out = slots.map(function (s) {
      var t = slotToken(s);
      return s.c ? '<span class="c-' + s.c + '">' + t + "</span>" : t;
    }).join(" ").replace(/\s+([.,!?;:])/g, "$1");
    return out + slotTail(de);
  }

  /* ---------- Colour-system mini-legend ----------
     Pages opt in with body[data-legend="gender|case|both"]. We auto-insert a
     compact, dismissible key at the top of the content so a learner always
     knows whether the colours mean GENDER or CASE. Skipped if the page already
     carries its own legend (e.g. study.html's case-legend card). */
  var GENDER_ITEMS =
    '<span class="ml-item"><span class="ml-bar der"></span>der</span>' +
    '<span class="ml-item"><span class="ml-bar die"></span>die</span>' +
    '<span class="ml-item"><span class="ml-bar das"></span>das</span>';
  var CASE_ITEMS =
    '<span class="ml-item"><span class="ml-chip nom">Nom</span></span>' +
    '<span class="ml-item"><span class="ml-chip akk">Akk</span></span>' +
    '<span class="ml-item"><span class="ml-chip dat">Dat</span></span>' +
    '<span class="ml-item"><span class="ml-chip gen">Gen</span></span>';

  function insertMiniLegend() {
    var body = document.body;
    if (!body) return;
    var kind = body.getAttribute("data-legend");
    if (!kind) return;
    // Don't double up if the page already shows a legend of its own.
    if (document.querySelector(".case-legend, .mini-legend")) return;
    // Honour a prior dismissal (stored under de_legendDismissed).
    var dismissed = load("legendDismissed", {});
    if (dismissed[kind]) return;

    var main = document.querySelector("main.container") || document.querySelector("main");
    if (!main) return;

    var html = '<span class="ml-title">';
    if (kind === "gender") {
      html += "Genus:</span> " + GENDER_ITEMS +
        '<span class="ml-note">Farbe am Nomen = Genus (der/die/das).</span>';
    } else if (kind === "case") {
      html += "Fall:</span> " + CASE_ITEMS +
        '<span class="ml-note">Farbe am Artikel/Ende = Fall.</span>';
    } else { // both
      html += "Farben:</span> " + GENDER_ITEMS +
        '<span class="ml-item" style="opacity:.4">·</span>' + CASE_ITEMS +
        '<span class="ml-note">Nomen-Farbe = Genus · Artikel-Farbe (unterstrichen) = Fall.</span>';
    }
    html += '<button class="ml-x" type="button" aria-label="Legende ausblenden" title="ausblenden">×</button>';

    var el = document.createElement("div");
    el.className = "mini-legend";
    el.innerHTML = html;
    el.querySelector(".ml-x").addEventListener("click", function () {
      el.remove();
      var d = load("legendDismissed", {});
      d[kind] = true;
      store("legendDismissed", d);
    });

    // Place at the top of the content, just under the intro heading/sub.
    var anchor = main.querySelector(".page-sub") ||
                 main.querySelector("h1.page-title") ||
                 main.querySelector("h1");
    if (anchor && anchor.parentNode === main) {
      main.insertBefore(el, anchor.nextSibling);
    } else {
      main.insertBefore(el, main.firstChild);
    }
  }

  /* ---------- Storage helpers ---------- */
  function store(key, val) { localStorage.setItem("de_" + key, JSON.stringify(val)); }
  function load(key, def) {
    try { var v = localStorage.getItem("de_" + key); return v === null ? def : JSON.parse(v); }
    catch (e) { return def; }
  }

  /* ---------- Expose ---------- */
  window.DE = {
    speak: speak,
    canSpeak: canSpeak,
    getRate: getRate,
    setRate: setRate,
    sayButton: sayButton,
    wireAudio: wireAudio,
    mediaMarkup: mediaMarkup,
    slotsModelText: slotsModelText,
    slotsModelHtml: slotsModelHtml,
    store: store,
    load: load,
    BASE: BASE
  };

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyFocus(focusOn()); // restore reading mode before paint settles
    buildNav();
    insertMiniLegend();
    wireAudio(document);
    initCollapsibleTopics();
    buildFooter();
  });
})();
