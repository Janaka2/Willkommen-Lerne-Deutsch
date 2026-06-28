/* Abstract speaking patterns ("Satzbausteine").
   Learn the frame, then swap in your own words.
   ___ marks the slot you fill.
   Each group carries a CEFR `level` ("A2" core, "B1" extension) so pages
   can filter by level. */
window.SENTENCE_GROUPS = [
  {
    title: "Sich vorstellen & Small Talk",
    level: "A2",
    en: "Introducing yourself & small talk",
    items: [
      { de: "Ich heiße ___.", en: "My name is ___." },
      { de: "Ich komme aus ___.", en: "I come from ___." },
      { de: "Ich wohne in ___.", en: "I live in ___." },
      { de: "Ich bin ___ Jahre alt.", en: "I am ___ years old." },
      { de: "Ich arbeite als ___.", en: "I work as a ___." },
      { de: "Ich lerne seit ___ Deutsch.", en: "I have been learning German for ___." },
      { de: "Wie geht es Ihnen? — Danke, gut. Und Ihnen?", en: "How are you? — Thanks, fine. And you?" },
      { de: "Freut mich, Sie kennenzulernen.", en: "Nice to meet you." }
    ]
  },
  {
    title: "Wünsche & höfliche Bitten",
    level: "A2",
    en: "Wishes & polite requests",
    items: [
      { de: "Ich möchte ___.", en: "I would like ___.", note: "polite 'want'" },
      { de: "Ich hätte gern ___.", en: "I'd like ___ (please).", note: "very polite, e.g. shopping" },
      { de: "Könnten Sie mir bitte ___?", en: "Could you please ___ (for me)?" },
      { de: "Können Sie mir helfen?", en: "Can you help me?" },
      { de: "Darf ich ___?", en: "May I ___?" },
      { de: "Würden Sie bitte ___?", en: "Would you please ___?" },
      { de: "Ich brauche ___.", en: "I need ___." },
      { de: "Einen Moment bitte.", en: "One moment, please." }
    ]
  },
  {
    title: "Meinung sagen",
    level: "A2",
    en: "Giving your opinion",
    items: [
      { de: "Ich denke, dass ___.", en: "I think that ___.", note: "verb to the END after 'dass'" },
      { de: "Ich glaube, ___.", en: "I believe ___." },
      { de: "Ich finde ___ gut / schlecht.", en: "I find ___ good / bad." },
      { de: "Meiner Meinung nach ___.", en: "In my opinion ___." },
      { de: "Ich bin sicher, dass ___.", en: "I am sure that ___." },
      { de: "Das stimmt.", en: "That's right." },
      { de: "Das stimmt nicht.", en: "That's not right." },
      { de: "Ich bin (nicht) einverstanden.", en: "I (don't) agree." }
    ]
  },
  {
    title: "Pläne & Zukunft",
    level: "A2",
    en: "Plans & future",
    items: [
      { de: "Ich will ___.", en: "I want to ___." },
      { de: "Ich habe vor, ___ zu ___.", en: "I plan to ___.", note: "zu + infinitive at the end" },
      { de: "Ich werde ___.", en: "I will ___.", note: "future with 'werden'" },
      { de: "Morgen ___ ich ___.", en: "Tomorrow I will ___." },
      { de: "Am Wochenende möchte ich ___.", en: "On the weekend I'd like to ___." },
      { de: "Ich muss noch ___.", en: "I still have to ___." },
      { de: "Vielleicht ___ ich ___.", en: "Maybe I'll ___." }
    ]
  },
  {
    title: "Mein Leben: früher, jetzt, später",
    level: "A2",
    en: "My life: past, present, future (werden · wurde · wollte · würde)",
    items: [
      { de: "Mit ___ wollte ich ___ werden.", en: "At (age) ___ I wanted to become ___.", note: "wollte = wanted (past)" },
      { de: "Als Kind wollte ich ___ werden.", en: "As a child I wanted to become ___." },
      { de: "Mit ___ wurde ich ___.", en: "At (age) ___ I became ___.", note: "wurde = became (past)" },
      { de: "Jetzt arbeite ich als ___.", en: "Now I work as ___." },
      { de: "Mit ___ werde ich ___.", en: "At (age) ___ I will become ___.", note: "werde = future / become" },
      { de: "Nächstes Jahr werde ich ___.", en: "Next year I will ___.", note: "werden + infinitive at end" },
      { de: "In ___ Jahren werde ich ___ machen.", en: "In ___ years I will do ___." },
      { de: "Eines Tages würde ich gern ___.", en: "One day I would love to ___.", note: "würde = would (dream)" }
    ]
  },
  {
    title: "Über die Vergangenheit sprechen",
    level: "A2",
    en: "Talking about the past (Perfekt)",
    items: [
      { de: "Ich habe ___ gemacht.", en: "I did / made ___." },
      { de: "Ich bin nach ___ gefahren.", en: "I went / drove to ___.", note: "movement → 'sein'" },
      { de: "Gestern habe ich ___.", en: "Yesterday I ___." },
      { de: "Letzte Woche bin ich ___.", en: "Last week I ___." },
      { de: "Ich habe ___ gegessen / getrunken / gesehen.", en: "I ate / drank / saw ___." },
      { de: "Wie war dein Wochenende?", en: "How was your weekend?", note: "'war' = was (Präteritum)" },
      { de: "Es war sehr schön.", en: "It was very nice." }
    ]
  },
  {
    title: "Vorlieben & Vergleiche",
    level: "A2",
    en: "Preferences & comparisons",
    items: [
      { de: "Ich mag ___.", en: "I like ___." },
      { de: "Ich ___ gern.", en: "I like to ___.", note: "verb + 'gern'" },
      { de: "Ich ___ lieber ___ als ___.", en: "I prefer to ___ ___ rather than ___." },
      { de: "Am liebsten ___ ich ___.", en: "Most of all I like to ___." },
      { de: "___ ist besser als ___.", en: "___ is better than ___." },
      { de: "___ ist genauso ___ wie ___.", en: "___ is just as ___ as ___." },
      { de: "Ich interessiere mich für ___.", en: "I am interested in ___." }
    ]
  },
  {
    title: "Fragen stellen",
    level: "A2",
    en: "Asking for information",
    items: [
      { de: "Wo ist ___?", en: "Where is ___?" },
      { de: "Wie komme ich zu ___?", en: "How do I get to ___?" },
      { de: "Wie viel kostet ___?", en: "How much does ___ cost?" },
      { de: "Wann ___?", en: "When ___?" },
      { de: "Warum ___?", en: "Why ___?" },
      { de: "Was bedeutet ___?", en: "What does ___ mean?" },
      { de: "Wie sagt man ___ auf Deutsch?", en: "How do you say ___ in German?" },
      { de: "Können Sie das bitte wiederholen?", en: "Can you repeat that, please?" },
      { de: "Können Sie bitte langsamer sprechen?", en: "Can you speak more slowly, please?" }
    ]
  },
  {
    title: "Probleme & Hilfe",
    level: "A2",
    en: "Problems & getting help",
    items: [
      { de: "Ich verstehe das nicht.", en: "I don't understand that." },
      { de: "Ich habe ein Problem mit ___.", en: "I have a problem with ___." },
      { de: "Entschuldigung, wie bitte?", en: "Excuse me, what was that?" },
      { de: "Können Sie mir das erklären?", en: "Can you explain that to me?" },
      { de: "Es tut mir leid.", en: "I'm sorry." },
      { de: "Kein Problem.", en: "No problem." },
      { de: "Ich weiß (es) nicht.", en: "I don't know." }
    ]
  },
  {
    title: "Verbinden: weil, dass, deshalb …",
    level: "A2",
    en: "Connectors (cause, result, condition)",
    items: [
      { de: "___, weil ___ (Verb am Ende).", en: "___, because ___.", note: "'weil' sends verb to END" },
      { de: "Ich bleibe zu Hause, weil ich krank bin.", en: "I'm staying home because I am sick." },
      { de: "Ich bin krank. Deshalb bleibe ich zu Hause.", en: "I'm sick. That's why I'm staying home.", note: "'deshalb' → verb 2nd" },
      { de: "Es regnet, aber ich gehe spazieren.", en: "It's raining, but I go for a walk." },
      { de: "Es ist spät, trotzdem arbeite ich weiter.", en: "It's late; nevertheless I keep working." },
      { de: "Wenn ich Zeit habe, ___.", en: "If/when I have time, ___." },
      { de: "Ich weiß nicht, ob ___.", en: "I don't know whether ___." },
      { de: "Ich gehe einkaufen und (ich) koche.", en: "I go shopping and cook." }
    ]
  },
  {
    title: "Höflich & vorsichtig (Konjunktiv II)",
    level: "A2",
    en: "Polite & tentative (would/could)",
    items: [
      { de: "Ich würde gern ___.", en: "I would like to ___." },
      { de: "Könnten Sie ___?", en: "Could you ___?" },
      { de: "Ich hätte eine Frage.", en: "I would have a question." },
      { de: "Es wäre schön, wenn ___.", en: "It would be nice if ___." },
      { de: "Dürfte ich ___?", en: "Might I ___?" },
      { de: "An deiner Stelle würde ich ___.", en: "If I were you, I would ___." }
    ]
  },
  {
    title: "Zeit & Häufigkeit",
    level: "A2",
    en: "Time & frequency",
    items: [
      { de: "am Montag / am Wochenende", en: "on Monday / on the weekend", note: "days → 'am'" },
      { de: "im Januar / im Sommer", en: "in January / in summer", note: "months & seasons → 'im'" },
      { de: "um 8 Uhr", en: "at 8 o'clock", note: "clock time → 'um'" },
      { de: "Ich stehe immer um 6 Uhr auf.", en: "I always get up at 6." },
      { de: "Ich lerne jeden Tag Deutsch.", en: "I study German every day." },
      { de: "Ich gehe oft / manchmal / nie ___.", en: "I often / sometimes / never ___." },
      { de: "zuerst … dann … danach … zum Schluss", en: "first … then … after that … finally" }
    ]
  },

  /* ===================== B1 sentence frames ===================== */
  {
    title: "Vor- & Nachteile abwägen",
    level: "B1",
    en: "Weighing pros & cons (B1)",
    items: [
      { de: "Einerseits ___, andererseits ___.", en: "On one hand ___, on the other hand ___." },
      { de: "Der Vorteil ist, dass ___.", en: "The advantage is that ___.", note: "dass → verb to the END" },
      { de: "Der Nachteil ist, dass ___.", en: "The disadvantage is that ___." },
      { de: "Es kommt darauf an, ob ___.", en: "It depends on whether ___." },
      { de: "Im Vergleich zu ___ ist ___ besser.", en: "Compared to ___, ___ is better." },
      { de: "Je mehr ___, desto ___.", en: "The more ___, the ___.", note: "je + comparative … desto + comparative" },
      { de: "Insgesamt finde ich, dass ___.", en: "All in all I think that ___." }
    ]
  },
  {
    title: "Begründen & überzeugen",
    level: "B1",
    en: "Justifying & persuading (B1)",
    items: [
      { de: "Ich bin der Meinung, dass ___.", en: "I'm of the opinion that ___." },
      { de: "Aus meiner Sicht ___.", en: "From my point of view ___." },
      { de: "Das liegt daran, dass ___.", en: "That's because ___.", note: "daran + dass" },
      { de: "Ein gutes Beispiel dafür ist ___.", en: "A good example of that is ___." },
      { de: "Obwohl ___, ___.", en: "Although ___, ___.", note: "'obwohl' sends verb to the END" },
      { de: "Trotzdem bin ich überzeugt, dass ___.", en: "Nevertheless I'm convinced that ___." },
      { de: "Deshalb schlage ich vor, dass ___.", en: "Therefore I suggest that ___." }
    ]
  },
  {
    title: "Beschwerden & Probleme lösen",
    level: "B1",
    en: "Complaints & solving problems (B1)",
    items: [
      { de: "Ich möchte mich über ___ beschweren.", en: "I'd like to complain about ___.", note: "sich beschweren über + Akk" },
      { de: "Leider funktioniert ___ nicht.", en: "Unfortunately ___ doesn't work." },
      { de: "Könnten Sie sich bitte darum kümmern?", en: "Could you please take care of it?" },
      { de: "Ich hätte erwartet, dass ___.", en: "I would have expected that ___." },
      { de: "Wäre es möglich, ___ zu ___?", en: "Would it be possible to ___?", note: "Konjunktiv II + zu-Infinitiv" },
      { de: "Ich schlage vor, dass wir ___.", en: "I suggest that we ___." },
      { de: "Vielen Dank für Ihr Verständnis.", en: "Thank you for your understanding." }
    ]
  },
  {
    title: "Berichten: Passiv & Relativsätze",
    level: "B1",
    en: "Reporting: passive & relative clauses (B1)",
    items: [
      { de: "___ wird gerade ___.", en: "___ is currently being ___.", note: "Passiv: wird + Partizip" },
      { de: "___ ist schon ___ worden.", en: "___ has already been ___.", note: "Passiv Perfekt: ist … worden" },
      { de: "Das ist die Person, die ___.", en: "That's the person who ___.", note: "Relativpronomen (Nom.)" },
      { de: "Das ist das Buch, das ich ___ habe.", en: "That's the book that I ___.", note: "Relativpronomen (Akk.)" },
      { de: "Der Grund, warum ___, ist ___.", en: "The reason why ___ is ___." },
      { de: "Es wird gesagt, dass ___.", en: "It is said that ___." }
    ]
  }
];
