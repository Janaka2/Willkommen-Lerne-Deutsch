/* =========================================================================
   REDEMITTEL / CHUNKS — window.CHUNKS
   High-frequency FORMULAIC PHRASES grouped by communicative FUNCTION, meant to
   be learned as WHOLE units (not assembled word-by-word). About half of native
   speech is prefabricated like this; retrieving a ready-made chunk is what makes
   speaking feel fluent instead of effortful.

   Shape:  { fn, de, en, level, register? }
     fn        communicative function (the grouping key, German label)
     de        the chunk exactly as a native speaker says it
     en        natural English gloss (meaning, not word-for-word)
     level     "A2" | "B1"
     register  "du" | "Sie" | undefined (neutral / works either way)

   USAGE: the Redemittel page (pages/redemittel.html) drills these produce-first
   (function + English cue → say it → reveal + audio) and can push any chunk into
   the FSRS deck. The "Sprechen freischalten" page (unlock.html) pulls them in as
   ready-made building blocks.

   OFFLINE-FIRST: bundled local data, committed to the repo, never fetched.
   Keep the shape stable; add more chunks freely.

   FUNCTIONS (fn values), so pages can order them consistently:
     Meinung · Zustimmen · Widersprechen · Höflich fragen ·
     Bestellen · Zögern · Überleiten · Gespräch
   ========================================================================= */
window.CHUNKS = [
  /* ---------- Meinung (give an opinion) ---------- */
  { fn: "Meinung", de: "Meiner Meinung nach …", en: "In my opinion …", level: "A2" },
  { fn: "Meinung", de: "Ich finde, dass …", en: "I think that …", level: "A2" },
  { fn: "Meinung", de: "Ich bin der Meinung, dass …", en: "I'm of the opinion that …", level: "B1" },
  { fn: "Meinung", de: "Ich glaube, dass …", en: "I believe that …", level: "A2" },
  { fn: "Meinung", de: "Für mich ist es wichtig, dass …", en: "For me it's important that …", level: "B1" },
  { fn: "Meinung", de: "Ehrlich gesagt …", en: "Honestly …", level: "A2" },
  { fn: "Meinung", de: "Wenn du mich fragst, …", en: "If you ask me, …", level: "B1", register: "du" },
  { fn: "Meinung", de: "Ich habe den Eindruck, dass …", en: "I have the impression that …", level: "B1" },

  /* ---------- Zustimmen (agree) ---------- */
  { fn: "Zustimmen", de: "Da stimme ich dir zu.", en: "I agree with you.", level: "A2", register: "du" },
  { fn: "Zustimmen", de: "Das sehe ich auch so.", en: "I see it that way too.", level: "A2" },
  { fn: "Zustimmen", de: "Genau!", en: "Exactly!", level: "A2" },
  { fn: "Zustimmen", de: "Das stimmt.", en: "That's right / true.", level: "A2" },
  { fn: "Zustimmen", de: "Da hast du völlig recht.", en: "You're completely right.", level: "A2", register: "du" },
  { fn: "Zustimmen", de: "Das finde ich auch.", en: "I think so too.", level: "A2" },
  { fn: "Zustimmen", de: "Absolut.", en: "Absolutely.", level: "A2" },

  /* ---------- Widersprechen (disagree, politely) ---------- */
  { fn: "Widersprechen", de: "Das sehe ich anders.", en: "I see it differently.", level: "A2" },
  { fn: "Widersprechen", de: "Da bin ich nicht sicher.", en: "I'm not sure about that.", level: "A2" },
  { fn: "Widersprechen", de: "Einerseits …, andererseits …", en: "On the one hand …, on the other hand …", level: "B1" },
  { fn: "Widersprechen", de: "Das kommt darauf an.", en: "That depends.", level: "A2" },
  { fn: "Widersprechen", de: "Ich bin da anderer Meinung.", en: "I'm of a different opinion.", level: "B1" },
  { fn: "Widersprechen", de: "Das stimmt zwar, aber …", en: "That's true, but …", level: "B1" },
  { fn: "Widersprechen", de: "Ich verstehe, was du meinst, aber …", en: "I see what you mean, but …", level: "B1", register: "du" },

  /* ---------- Höflich fragen (ask politely) ---------- */
  { fn: "Höflich fragen", de: "Könnten Sie mir sagen, …", en: "Could you tell me …", level: "A2", register: "Sie" },
  { fn: "Höflich fragen", de: "Darf ich fragen, …", en: "May I ask …", level: "A2" },
  { fn: "Höflich fragen", de: "Wäre es möglich, …", en: "Would it be possible …", level: "B1" },
  { fn: "Höflich fragen", de: "Entschuldigung, wissen Sie, wo …", en: "Excuse me, do you know where …", level: "A2", register: "Sie" },
  { fn: "Höflich fragen", de: "Könntest du mir kurz helfen?", en: "Could you help me for a moment?", level: "A2", register: "du" },
  { fn: "Höflich fragen", de: "Ich hätte eine Frage.", en: "I have a question.", level: "A2" },
  { fn: "Höflich fragen", de: "Würde es Ihnen etwas ausmachen, wenn …", en: "Would you mind if …", level: "B1", register: "Sie" },

  /* ---------- Bestellen / Einkaufen (order / shop) ---------- */
  { fn: "Bestellen", de: "Ich hätte gern …", en: "I'd like …", level: "A2" },
  { fn: "Bestellen", de: "Könnte ich bitte … haben?", en: "Could I please have …?", level: "A2" },
  { fn: "Bestellen", de: "Was können Sie empfehlen?", en: "What can you recommend?", level: "A2", register: "Sie" },
  { fn: "Bestellen", de: "Ich nehme das.", en: "I'll take that.", level: "A2" },
  { fn: "Bestellen", de: "Zahlen, bitte.", en: "The bill, please.", level: "A2" },
  { fn: "Bestellen", de: "Haben Sie das auch in einer anderen Größe?", en: "Do you have this in another size too?", level: "B1", register: "Sie" },
  { fn: "Bestellen", de: "Das ist alles, danke.", en: "That's everything, thanks.", level: "A2" },

  /* ---------- Zögern / Füllwörter (hesitate / fillers) ---------- */
  { fn: "Zögern", de: "Also …", en: "Well … / So …", level: "A2" },
  { fn: "Zögern", de: "Na ja …", en: "Well … (hmm)", level: "A2" },
  { fn: "Zögern", de: "Wie soll ich sagen …", en: "How should I put it …", level: "B1" },
  { fn: "Zögern", de: "Das ist eine gute Frage.", en: "That's a good question.", level: "A2" },
  { fn: "Zögern", de: "Moment mal …", en: "Just a moment …", level: "A2" },
  { fn: "Zögern", de: "Lass mich kurz überlegen.", en: "Let me think for a second.", level: "B1", register: "du" },
  { fn: "Zögern", de: "Wie sagt man …", en: "How do you say …", level: "A2" },

  /* ---------- Überleiten (transition / connect) ---------- */
  { fn: "Überleiten", de: "Übrigens …", en: "By the way …", level: "A2" },
  { fn: "Überleiten", de: "Auf jeden Fall …", en: "In any case …", level: "A2" },
  { fn: "Überleiten", de: "Das heißt, …", en: "That means / i.e. …", level: "A2" },
  { fn: "Überleiten", de: "Mit anderen Worten …", en: "In other words …", level: "B1" },
  { fn: "Überleiten", de: "Zum Beispiel …", en: "For example …", level: "A2" },
  { fn: "Überleiten", de: "Das liegt daran, dass …", en: "That's because …", level: "B1" },
  { fn: "Überleiten", de: "Kurz gesagt …", en: "In short …", level: "B1" },
  { fn: "Überleiten", de: "Trotzdem …", en: "Nevertheless …", level: "A2" },

  /* ---------- Gespräch öffnen / schließen (open / close) ---------- */
  { fn: "Gespräch", de: "Wie geht es Ihnen?", en: "How are you?", level: "A2", register: "Sie" },
  { fn: "Gespräch", de: "Wie geht's dir?", en: "How are you?", level: "A2", register: "du" },
  { fn: "Gespräch", de: "Schön, Sie kennenzulernen.", en: "Nice to meet you.", level: "A2", register: "Sie" },
  { fn: "Gespräch", de: "Freut mich!", en: "Pleased to meet you!", level: "A2" },
  { fn: "Gespräch", de: "Bis bald!", en: "See you soon!", level: "A2" },
  { fn: "Gespräch", de: "Wir sehen uns.", en: "See you around.", level: "A2" },
  { fn: "Gespräch", de: "Schönen Tag noch!", en: "Have a nice day!", level: "A2" },
  { fn: "Gespräch", de: "Danke für das Gespräch.", en: "Thanks for the chat.", level: "B1" }
];

/* Canonical function order + emoji, so every page presents them the same way. */
window.CHUNK_FUNCTIONS = [
  { fn: "Meinung",         label: "Meinung sagen",       ico: "💬" },
  { fn: "Zustimmen",       label: "Zustimmen",           ico: "👍" },
  { fn: "Widersprechen",   label: "Widersprechen",       ico: "🤔" },
  { fn: "Höflich fragen",  label: "Höflich fragen",      ico: "🙏" },
  { fn: "Bestellen",       label: "Bestellen & Einkaufen", ico: "🛒" },
  { fn: "Zögern",          label: "Zögern & Füllwörter", ico: "⏳" },
  { fn: "Überleiten",      label: "Überleiten",          ico: "🔗" },
  { fn: "Gespräch",        label: "Öffnen & Schließen",  ico: "👋" }
];
