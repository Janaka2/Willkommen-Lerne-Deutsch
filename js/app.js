/* =========================================================
   Shared app logic: navigation, theme, audio (TTS), storage.
   No frameworks, no network — works fully offline (file://).
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Path helper (root vs /pages/) ---------- */
  var inPages = location.pathname.indexOf("/pages/") !== -1;
  var BASE = inPages ? "../" : "";

  var NAV = [
    { key: "index",        label: "Start",            href: "index.html" },
    { key: "today",        label: "Heute lernen",     href: "pages/today.html" },
    { key: "plan",         label: "Tagesplan",        href: "pages/plan.html" },
    { key: "basics",       label: "A1 Grundlagen",    href: "pages/basics.html" },
    { key: "fragen",       label: "W-Fragen",         href: "pages/fragen.html" },
    { key: "golden-rules", label: "Goldene Regeln",   href: "pages/golden-rules.html" },
    { key: "grammar",      label: "Grammatik",        href: "pages/grammar.html" },
    { key: "cases",        label: "Fälle (Cases)",    href: "pages/cases.html" },
    { key: "nouns",        label: "Nomen",            href: "pages/nouns.html" },
    { key: "verbs",        label: "Verben",           href: "pages/verbs.html" },
    { key: "sentences",    label: "Sätze",            href: "pages/sentences.html" },
    { key: "future",       label: "Zukunft",          href: "pages/future.html" },
    { key: "dialogs",      label: "Dialoge",          href: "pages/dialogs.html" },
    { key: "study",        label: "Lernkarten (FSRS)", href: "pages/study.html" },
    { key: "listening",    label: "Hören & Nachsprechen", href: "pages/listening.html" },
    { key: "speaking",     label: "Sprechen",         href: "pages/speaking.html" },
    { key: "flashcards",   label: "Karteikarten",     href: "pages/flashcards.html" },
    { key: "quiz",         label: "Quiz",             href: "pages/quiz.html" },
    { key: "progress",     label: "Fortschritt",      href: "pages/progress.html" }
  ];

  function buildNav() {
    var current = document.body.getAttribute("data-page") || "";
    var header = document.createElement("header");
    header.className = "site-header";

    var linksHtml = NAV.map(function (n) {
      var active = n.key === current ? " active" : "";
      return '<a class="' + active.trim() + '" href="' + BASE + n.href + '">' + n.label + "</a>";
    }).join("");

    header.innerHTML =
      '<div class="nav">' +
        '<a class="brand" href="' + BASE + 'index.html"><span class="flag">🇩🇪</span> Deutsch A2</a>' +
        '<button class="nav-burger" aria-label="Menü">☰</button>' +
        '<nav class="nav-links">' + linksHtml + "</nav>" +
        '<button class="theme-toggle" aria-label="Theme wechseln">🌙 Dunkel</button>' +
      "</div>";

    document.body.insertBefore(header, document.body.firstChild);

    var burger = header.querySelector(".nav-burger");
    var links = header.querySelector(".nav-links");
    burger.addEventListener("click", function () { links.classList.toggle("open"); });

    var toggle = header.querySelector(".theme-toggle");
    toggle.addEventListener("click", toggleTheme);
    refreshThemeButton();
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

  /* ---------- Audio (German text-to-speech) ---------- */
  var deVoice = null;
  function pickVoice() {
    if (!window.speechSynthesis) return;
    var voices = speechSynthesis.getVoices() || [];
    deVoice =
      voices.filter(function (v) { return v.lang && v.lang.toLowerCase().indexOf("de") === 0; })[0] || null;
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
    store: store,
    load: load,
    BASE: BASE
  };

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    buildNav();
    wireAudio(document);
    buildFooter();
  });
})();
