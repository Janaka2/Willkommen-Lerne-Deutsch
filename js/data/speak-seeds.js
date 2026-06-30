/* =========================================================
   SPEAK SEEDS — "Sprechen freischalten" (Unlock Speaking)
   ---------------------------------------------------------
   ONE memorised core sentence, transformed along a SINGLE axis
   at a time. The learner produces dozens of sentences from one
   frame and absorbs conjugation WITHOUT grammar tables.

   Shape:
     {
       id, cat,
       core: { de, en },          // the sentence to memorise first
       time:   [ step, … ],        // same person, walked through TIME
       person: [ step, … ],        // same time, walked through PERSON
       form:   [ step, … ],        // Aussage → Negativ → Frage → W-Frage
       modal:  [ step, … ],        // add a modal verb (wollen/müssen/…)
       build:  [ step, … ]         // grow the sentence ONE slot at a time
     }
   step = { label, de, en, grammar? }
     label   = learner-friendly cue word (jetzt/gestern/ich/du/…)
     grammar = OPTIONAL grammar name, shown only when the toggle is ON
   Any track may be omitted when it does not fit a seed.
   The CHANGED words are highlighted by the page (word-level diff),
   so nothing needs to be marked here.
   ========================================================= */

window.SPEAK_SEEDS = [
  {
    id: "arbeit-gehen",
    cat: "Arbeit & Alltag",
    core: { de: "Ich gehe zur Arbeit.", en: "I go to work." },
    time: [
      { label: "jetzt",   de: "Ich gehe zur Arbeit.",              en: "I go to work.",            grammar: "Präsens" },
      { label: "gestern", de: "Gestern bin ich zur Arbeit gegangen.", en: "Yesterday I went to work.", grammar: "Perfekt" },
      { label: "morgen",  de: "Morgen gehe ich zur Arbeit.",       en: "Tomorrow I'll go to work.", grammar: "Futur (mit Präsens)" },
      { label: "oft",     de: "Ich gehe oft zur Arbeit.",          en: "I often go to work.",      grammar: "Präsens (Gewohnheit)" }
    ],
    person: [
      { label: "ich", de: "Ich gehe zur Arbeit.", en: "I go to work.",     grammar: "1. Person Singular" },
      { label: "du",  de: "Du gehst zur Arbeit.", en: "You go to work.",   grammar: "2. Person Singular" },
      { label: "er",  de: "Er geht zur Arbeit.",  en: "He goes to work.",  grammar: "3. Person Singular" },
      { label: "wir", de: "Wir gehen zur Arbeit.", en: "We go to work.",   grammar: "1. Person Plural" }
    ],
    form: [
      { label: "Aussage", de: "Ich gehe zur Arbeit.",     en: "I go to work.",         grammar: "Aussagesatz" },
      { label: "Negativ", de: "Ich gehe nicht zur Arbeit.", en: "I don't go to work.", grammar: "Verneinung (nicht)" },
      { label: "Frage",   de: "Gehst du zur Arbeit?",     en: "Do you go to work?",    grammar: "Ja/Nein-Frage" },
      { label: "W-Frage", de: "Wann gehst du zur Arbeit?", en: "When do you go to work?", grammar: "W-Frage" }
    ],
    modal: [
      { label: "müssen",  de: "Ich muss zur Arbeit gehen.",    en: "I have to go to work.",  grammar: "Modalverb: müssen" },
      { label: "wollen",  de: "Ich will zur Arbeit gehen.",    en: "I want to go to work.",  grammar: "Modalverb: wollen" },
      { label: "können",  de: "Ich kann zur Arbeit gehen.",    en: "I can go to work.",      grammar: "Modalverb: können" },
      { label: "möchten", de: "Ich möchte zur Arbeit gehen.",  en: "I would like to go to work.", grammar: "Modalverb: möchten" }
    ],
    build: [
      { label: "Kern",     de: "Ich gehe zur Arbeit.",                                   en: "I go to work." },
      { label: "+ Zeit",   de: "Ich gehe jeden Tag zur Arbeit.",                         en: "I go to work every day." },
      { label: "+ Art",    de: "Ich gehe jeden Tag mit dem Velo zur Arbeit.",            en: "I go to work by bike every day." },
      { label: "+ Grund",  de: "Ich gehe jeden Tag mit dem Velo zur Arbeit, weil es gesund ist.", en: "I go to work by bike every day because it's healthy." }
    ]
  },

  {
    id: "zug-nehmen",
    cat: "Verkehr",
    core: { de: "Ich nehme den Zug.", en: "I take the train." },
    time: [
      { label: "jetzt",   de: "Ich nehme den Zug.",              en: "I take the train.",            grammar: "Präsens" },
      { label: "gestern", de: "Gestern habe ich den Zug genommen.", en: "Yesterday I took the train.", grammar: "Perfekt" },
      { label: "morgen",  de: "Morgen nehme ich den Zug.",       en: "Tomorrow I'll take the train.", grammar: "Futur (mit Präsens)" },
      { label: "oft",     de: "Ich nehme oft den Zug.",          en: "I often take the train.",      grammar: "Präsens (Gewohnheit)" }
    ],
    person: [
      { label: "ich", de: "Ich nehme den Zug.",  en: "I take the train.",    grammar: "1. Person Singular" },
      { label: "du",  de: "Du nimmst den Zug.",  en: "You take the train.",  grammar: "2. Person Singular" },
      { label: "er",  de: "Er nimmt den Zug.",   en: "He takes the train.",  grammar: "3. Person Singular" },
      { label: "wir", de: "Wir nehmen den Zug.", en: "We take the train.",   grammar: "1. Person Plural" }
    ],
    form: [
      { label: "Aussage", de: "Ich nehme den Zug.",       en: "I take the train.",        grammar: "Aussagesatz" },
      { label: "Negativ", de: "Ich nehme nicht den Zug.",  en: "I don't take the train.", grammar: "Verneinung (nicht)" },
      { label: "Frage",   de: "Nimmst du den Zug?",       en: "Do you take the train?",   grammar: "Ja/Nein-Frage" },
      { label: "W-Frage", de: "Wann nimmst du den Zug?",  en: "When do you take the train?", grammar: "W-Frage" }
    ],
    modal: [
      { label: "müssen",  de: "Ich muss den Zug nehmen.",   en: "I have to take the train.", grammar: "Modalverb: müssen" },
      { label: "wollen",  de: "Ich will den Zug nehmen.",   en: "I want to take the train.", grammar: "Modalverb: wollen" },
      { label: "können",  de: "Ich kann den Zug nehmen.",   en: "I can take the train.",     grammar: "Modalverb: können" },
      { label: "möchten", de: "Ich möchte den Zug nehmen.", en: "I would like to take the train.", grammar: "Modalverb: möchten" }
    ],
    build: [
      { label: "Kern",   de: "Ich nehme den Zug.",                                          en: "I take the train." },
      { label: "+ Zeit", de: "Ich nehme um sieben den Zug.",                                en: "I take the train at seven." },
      { label: "+ Ziel", de: "Ich nehme um sieben den Zug nach Zürich.",                    en: "I take the train to Zürich at seven." },
      { label: "+ Grund", de: "Ich nehme um sieben den Zug nach Zürich, weil ich dort arbeite.", en: "I take the train to Zürich at seven because I work there." }
    ]
  },

  {
    id: "deutsch-lernen",
    cat: "Deutsch lernen",
    core: { de: "Ich lerne Deutsch.", en: "I learn German." },
    time: [
      { label: "jetzt",   de: "Ich lerne Deutsch.",              en: "I learn German.",            grammar: "Präsens" },
      { label: "gestern", de: "Gestern habe ich Deutsch gelernt.", en: "Yesterday I learned German.", grammar: "Perfekt" },
      { label: "morgen",  de: "Morgen lerne ich Deutsch.",       en: "Tomorrow I'll learn German.", grammar: "Futur (mit Präsens)" },
      { label: "oft",     de: "Ich lerne jeden Tag Deutsch.",    en: "I learn German every day.",  grammar: "Präsens (Gewohnheit)" }
    ],
    person: [
      { label: "ich", de: "Ich lerne Deutsch.",  en: "I learn German.",    grammar: "1. Person Singular" },
      { label: "du",  de: "Du lernst Deutsch.",  en: "You learn German.",  grammar: "2. Person Singular" },
      { label: "er",  de: "Er lernt Deutsch.",   en: "He learns German.",  grammar: "3. Person Singular" },
      { label: "wir", de: "Wir lernen Deutsch.", en: "We learn German.",   grammar: "1. Person Plural" }
    ],
    form: [
      { label: "Aussage", de: "Ich lerne Deutsch.",      en: "I learn German.",        grammar: "Aussagesatz" },
      { label: "Negativ", de: "Ich lerne kein Deutsch.",  en: "I don't learn German.", grammar: "Verneinung (kein)" },
      { label: "Frage",   de: "Lernst du Deutsch?",      en: "Do you learn German?",   grammar: "Ja/Nein-Frage" },
      { label: "W-Frage", de: "Warum lernst du Deutsch?", en: "Why do you learn German?", grammar: "W-Frage" }
    ],
    modal: [
      { label: "müssen",  de: "Ich muss Deutsch lernen.",   en: "I have to learn German.", grammar: "Modalverb: müssen" },
      { label: "wollen",  de: "Ich will Deutsch lernen.",   en: "I want to learn German.", grammar: "Modalverb: wollen" },
      { label: "können",  de: "Ich kann Deutsch lernen.",   en: "I can learn German.",     grammar: "Modalverb: können" },
      { label: "möchten", de: "Ich möchte Deutsch lernen.", en: "I would like to learn German.", grammar: "Modalverb: möchten" }
    ],
    build: [
      { label: "Kern",   de: "Ich lerne Deutsch.",                                            en: "I learn German." },
      { label: "+ Zeit", de: "Ich lerne jeden Abend Deutsch.",                                en: "I learn German every evening." },
      { label: "+ Ort",  de: "Ich lerne jeden Abend zu Hause Deutsch.",                       en: "I learn German at home every evening." },
      { label: "+ Grund", de: "Ich lerne jeden Abend zu Hause Deutsch, weil ich in der Schweiz lebe.", en: "I learn German at home every evening because I live in Switzerland." }
    ]
  },

  {
    id: "brot-kaufen",
    cat: "Einkaufen",
    core: { de: "Ich kaufe Brot.", en: "I buy bread." },
    time: [
      { label: "jetzt",   de: "Ich kaufe Brot.",              en: "I buy bread.",            grammar: "Präsens" },
      { label: "gestern", de: "Gestern habe ich Brot gekauft.", en: "Yesterday I bought bread.", grammar: "Perfekt" },
      { label: "morgen",  de: "Morgen kaufe ich Brot.",       en: "Tomorrow I'll buy bread.", grammar: "Futur (mit Präsens)" },
      { label: "oft",     de: "Ich kaufe oft Brot.",          en: "I often buy bread.",      grammar: "Präsens (Gewohnheit)" }
    ],
    person: [
      { label: "ich", de: "Ich kaufe Brot.",  en: "I buy bread.",    grammar: "1. Person Singular" },
      { label: "du",  de: "Du kaufst Brot.",  en: "You buy bread.",  grammar: "2. Person Singular" },
      { label: "er",  de: "Er kauft Brot.",   en: "He buys bread.",  grammar: "3. Person Singular" },
      { label: "wir", de: "Wir kaufen Brot.", en: "We buy bread.",   grammar: "1. Person Plural" }
    ],
    form: [
      { label: "Aussage", de: "Ich kaufe Brot.",      en: "I buy bread.",       grammar: "Aussagesatz" },
      { label: "Negativ", de: "Ich kaufe kein Brot.",  en: "I don't buy bread.", grammar: "Verneinung (kein)" },
      { label: "Frage",   de: "Kaufst du Brot?",      en: "Do you buy bread?",  grammar: "Ja/Nein-Frage" },
      { label: "W-Frage", de: "Was kaufst du?",       en: "What do you buy?",   grammar: "W-Frage" }
    ],
    modal: [
      { label: "müssen",  de: "Ich muss Brot kaufen.",   en: "I have to buy bread.", grammar: "Modalverb: müssen" },
      { label: "wollen",  de: "Ich will Brot kaufen.",   en: "I want to buy bread.", grammar: "Modalverb: wollen" },
      { label: "können",  de: "Ich kann Brot kaufen.",   en: "I can buy bread.",     grammar: "Modalverb: können" },
      { label: "möchten", de: "Ich möchte Brot kaufen.", en: "I would like to buy bread.", grammar: "Modalverb: möchten" }
    ],
    build: [
      { label: "Kern",   de: "Ich kaufe Brot.",                                          en: "I buy bread." },
      { label: "+ Ort",  de: "Ich kaufe Brot im Supermarkt.",                            en: "I buy bread at the supermarket." },
      { label: "+ Zeit", de: "Ich kaufe am Samstag Brot im Supermarkt.",                 en: "I buy bread at the supermarket on Saturday." },
      { label: "+ Grund", de: "Ich kaufe am Samstag Brot im Supermarkt, weil wir nichts mehr haben.", en: "I buy bread at the supermarket on Saturday because we've run out." }
    ]
  },

  {
    id: "mutter-anrufen",
    cat: "Familie",
    core: { de: "Ich rufe meine Mutter an.", en: "I call my mother." },
    time: [
      { label: "jetzt",   de: "Ich rufe meine Mutter an.",              en: "I call my mother.",            grammar: "Präsens" },
      { label: "gestern", de: "Gestern habe ich meine Mutter angerufen.", en: "Yesterday I called my mother.", grammar: "Perfekt" },
      { label: "morgen",  de: "Morgen rufe ich meine Mutter an.",       en: "Tomorrow I'll call my mother.", grammar: "Futur (mit Präsens)" },
      { label: "oft",     de: "Ich rufe oft meine Mutter an.",          en: "I often call my mother.",      grammar: "Präsens (Gewohnheit)" }
    ],
    person: [
      { label: "ich", de: "Ich rufe meine Mutter an.",   en: "I call my mother.",      grammar: "1. Person Singular" },
      { label: "du",  de: "Du rufst deine Mutter an.",   en: "You call your mother.",  grammar: "2. Person Singular" },
      { label: "er",  de: "Er ruft seine Mutter an.",    en: "He calls his mother.",   grammar: "3. Person Singular" },
      { label: "wir", de: "Wir rufen unsere Mutter an.", en: "We call our mother.",    grammar: "1. Person Plural" }
    ],
    form: [
      { label: "Aussage", de: "Ich rufe meine Mutter an.",       en: "I call my mother.",         grammar: "Aussagesatz" },
      { label: "Negativ", de: "Ich rufe meine Mutter nicht an.",  en: "I don't call my mother.",  grammar: "Verneinung (nicht)" },
      { label: "Frage",   de: "Rufst du deine Mutter an?",       en: "Do you call your mother?",  grammar: "Ja/Nein-Frage" },
      { label: "W-Frage", de: "Wann rufst du deine Mutter an?",  en: "When do you call your mother?", grammar: "W-Frage" }
    ],
    modal: [
      { label: "müssen",  de: "Ich muss meine Mutter anrufen.",   en: "I have to call my mother.", grammar: "Modalverb: müssen" },
      { label: "wollen",  de: "Ich will meine Mutter anrufen.",   en: "I want to call my mother.", grammar: "Modalverb: wollen" },
      { label: "können",  de: "Ich kann meine Mutter anrufen.",   en: "I can call my mother.",     grammar: "Modalverb: können" },
      { label: "möchten", de: "Ich möchte meine Mutter anrufen.", en: "I would like to call my mother.", grammar: "Modalverb: möchten" }
    ],
    build: [
      { label: "Kern",   de: "Ich rufe meine Mutter an.",                                en: "I call my mother." },
      { label: "+ Zeit", de: "Ich rufe am Sonntag meine Mutter an.",                     en: "I call my mother on Sunday." },
      { label: "+ Grund", de: "Ich rufe am Sonntag meine Mutter an, weil sie allein ist.", en: "I call my mother on Sunday because she is alone." }
    ]
  },

  {
    id: "fussball-spielen",
    cat: "Wochenende",
    core: { de: "Ich spiele Fussball.", en: "I play football." },
    time: [
      { label: "jetzt",   de: "Ich spiele Fussball.",              en: "I play football.",            grammar: "Präsens" },
      { label: "gestern", de: "Gestern habe ich Fussball gespielt.", en: "Yesterday I played football.", grammar: "Perfekt" },
      { label: "morgen",  de: "Morgen spiele ich Fussball.",       en: "Tomorrow I'll play football.", grammar: "Futur (mit Präsens)" },
      { label: "oft",     de: "Ich spiele oft Fussball.",          en: "I often play football.",      grammar: "Präsens (Gewohnheit)" }
    ],
    person: [
      { label: "ich", de: "Ich spiele Fussball.",  en: "I play football.",    grammar: "1. Person Singular" },
      { label: "du",  de: "Du spielst Fussball.",  en: "You play football.",  grammar: "2. Person Singular" },
      { label: "er",  de: "Er spielt Fussball.",   en: "He plays football.",  grammar: "3. Person Singular" },
      { label: "wir", de: "Wir spielen Fussball.", en: "We play football.",   grammar: "1. Person Plural" }
    ],
    form: [
      { label: "Aussage", de: "Ich spiele Fussball.",        en: "I play football.",        grammar: "Aussagesatz" },
      { label: "Negativ", de: "Ich spiele keinen Fussball.",  en: "I don't play football.", grammar: "Verneinung (kein)" },
      { label: "Frage",   de: "Spielst du Fussball?",        en: "Do you play football?",   grammar: "Ja/Nein-Frage" },
      { label: "W-Frage", de: "Wann spielst du Fussball?",   en: "When do you play football?", grammar: "W-Frage" }
    ],
    modal: [
      { label: "müssen",  de: "Ich muss Fussball spielen.",   en: "I have to play football.", grammar: "Modalverb: müssen" },
      { label: "wollen",  de: "Ich will Fussball spielen.",   en: "I want to play football.", grammar: "Modalverb: wollen" },
      { label: "können",  de: "Ich kann Fussball spielen.",   en: "I can play football.",     grammar: "Modalverb: können" },
      { label: "möchten", de: "Ich möchte Fussball spielen.", en: "I would like to play football.", grammar: "Modalverb: möchten" }
    ],
    build: [
      { label: "Kern",        de: "Ich spiele Fussball.",                                       en: "I play football." },
      { label: "+ Zeit",      de: "Ich spiele am Wochenende Fussball.",                         en: "I play football on the weekend." },
      { label: "+ Ort",       de: "Ich spiele am Wochenende im Park Fussball.",                 en: "I play football in the park on the weekend." },
      { label: "+ Begleitung", de: "Ich spiele am Wochenende im Park Fussball mit meinen Freunden.", en: "I play football in the park with my friends on the weekend." }
    ]
  },

  {
    id: "apfel-essen",
    cat: "Essen",
    core: { de: "Ich esse einen Apfel.", en: "I eat an apple." },
    time: [
      { label: "jetzt",   de: "Ich esse einen Apfel.",              en: "I eat an apple.",            grammar: "Präsens" },
      { label: "gestern", de: "Gestern habe ich einen Apfel gegessen.", en: "Yesterday I ate an apple.", grammar: "Perfekt" },
      { label: "morgen",  de: "Morgen esse ich einen Apfel.",       en: "Tomorrow I'll eat an apple.", grammar: "Futur (mit Präsens)" },
      { label: "oft",     de: "Ich esse oft einen Apfel.",          en: "I often eat an apple.",      grammar: "Präsens (Gewohnheit)" }
    ],
    person: [
      { label: "ich", de: "Ich esse einen Apfel.",  en: "I eat an apple.",    grammar: "1. Person Singular" },
      { label: "du",  de: "Du isst einen Apfel.",   en: "You eat an apple.",  grammar: "2. Person Singular" },
      { label: "er",  de: "Er isst einen Apfel.",   en: "He eats an apple.",  grammar: "3. Person Singular" },
      { label: "wir", de: "Wir essen einen Apfel.", en: "We eat an apple.",   grammar: "1. Person Plural" }
    ],
    form: [
      { label: "Aussage", de: "Ich esse einen Apfel.",     en: "I eat an apple.",        grammar: "Aussagesatz" },
      { label: "Negativ", de: "Ich esse keinen Apfel.",     en: "I don't eat an apple.", grammar: "Verneinung (kein)" },
      { label: "Frage",   de: "Isst du einen Apfel?",      en: "Do you eat an apple?",   grammar: "Ja/Nein-Frage" },
      { label: "W-Frage", de: "Was isst du?",              en: "What do you eat?",       grammar: "W-Frage" }
    ],
    modal: [
      { label: "müssen",  de: "Ich muss einen Apfel essen.",   en: "I have to eat an apple.", grammar: "Modalverb: müssen" },
      { label: "wollen",  de: "Ich will einen Apfel essen.",   en: "I want to eat an apple.", grammar: "Modalverb: wollen" },
      { label: "können",  de: "Ich kann einen Apfel essen.",   en: "I can eat an apple.",     grammar: "Modalverb: können" },
      { label: "möchten", de: "Ich möchte einen Apfel essen.", en: "I would like to eat an apple.", grammar: "Modalverb: möchten" }
    ],
    build: [
      { label: "Kern",   de: "Ich esse einen Apfel.",                                       en: "I eat an apple." },
      { label: "+ Zeit", de: "Ich esse am Morgen einen Apfel.",                             en: "I eat an apple in the morning." },
      { label: "+ Ort",  de: "Ich esse am Morgen im Büro einen Apfel.",                     en: "I eat an apple at the office in the morning." },
      { label: "+ Grund", de: "Ich esse am Morgen im Büro einen Apfel, weil er gesund ist.", en: "I eat an apple at the office in the morning because it's healthy." }
    ]
  },

  {
    id: "email-schreiben",
    cat: "Arbeit",
    core: { de: "Ich schreibe eine E-Mail.", en: "I write an email." },
    time: [
      { label: "jetzt",   de: "Ich schreibe eine E-Mail.",              en: "I write an email.",            grammar: "Präsens" },
      { label: "gestern", de: "Gestern habe ich eine E-Mail geschrieben.", en: "Yesterday I wrote an email.", grammar: "Perfekt" },
      { label: "morgen",  de: "Morgen schreibe ich eine E-Mail.",       en: "Tomorrow I'll write an email.", grammar: "Futur (mit Präsens)" },
      { label: "oft",     de: "Ich schreibe oft E-Mails.",             en: "I often write emails.",        grammar: "Präsens (Gewohnheit)" }
    ],
    person: [
      { label: "ich", de: "Ich schreibe eine E-Mail.",  en: "I write an email.",    grammar: "1. Person Singular" },
      { label: "du",  de: "Du schreibst eine E-Mail.",  en: "You write an email.",  grammar: "2. Person Singular" },
      { label: "er",  de: "Er schreibt eine E-Mail.",   en: "He writes an email.",  grammar: "3. Person Singular" },
      { label: "wir", de: "Wir schreiben eine E-Mail.", en: "We write an email.",   grammar: "1. Person Plural" }
    ],
    form: [
      { label: "Aussage", de: "Ich schreibe eine E-Mail.",     en: "I write an email.",        grammar: "Aussagesatz" },
      { label: "Negativ", de: "Ich schreibe keine E-Mail.",     en: "I don't write an email.", grammar: "Verneinung (kein)" },
      { label: "Frage",   de: "Schreibst du eine E-Mail?",     en: "Do you write an email?",   grammar: "Ja/Nein-Frage" },
      { label: "W-Frage", de: "An wen schreibst du?",          en: "Who are you writing to?",  grammar: "W-Frage" }
    ],
    modal: [
      { label: "müssen",  de: "Ich muss eine E-Mail schreiben.",   en: "I have to write an email.", grammar: "Modalverb: müssen" },
      { label: "wollen",  de: "Ich will eine E-Mail schreiben.",   en: "I want to write an email.", grammar: "Modalverb: wollen" },
      { label: "können",  de: "Ich kann eine E-Mail schreiben.",   en: "I can write an email.",     grammar: "Modalverb: können" },
      { label: "möchten", de: "Ich möchte eine E-Mail schreiben.", en: "I would like to write an email.", grammar: "Modalverb: möchten" }
    ],
    build: [
      { label: "Kern",       de: "Ich schreibe eine E-Mail.",                                     en: "I write an email." },
      { label: "+ Empfänger", de: "Ich schreibe meinem Chef eine E-Mail.",                        en: "I write an email to my boss." },
      { label: "+ Zeit",     de: "Ich schreibe heute meinem Chef eine E-Mail.",                   en: "I write an email to my boss today." },
      { label: "+ Grund",    de: "Ich schreibe heute meinem Chef eine E-Mail, weil ich krank bin.", en: "I write an email to my boss today because I'm sick." }
    ]
  },

  {
    id: "wasser-trinken",
    cat: "Gesundheit",
    core: { de: "Ich trinke Wasser.", en: "I drink water." },
    time: [
      { label: "jetzt",   de: "Ich trinke Wasser.",              en: "I drink water.",            grammar: "Präsens" },
      { label: "gestern", de: "Gestern habe ich Wasser getrunken.", en: "Yesterday I drank water.", grammar: "Perfekt" },
      { label: "morgen",  de: "Morgen trinke ich Wasser.",       en: "Tomorrow I'll drink water.", grammar: "Futur (mit Präsens)" },
      { label: "oft",     de: "Ich trinke oft Wasser.",          en: "I often drink water.",      grammar: "Präsens (Gewohnheit)" }
    ],
    person: [
      { label: "ich", de: "Ich trinke Wasser.",  en: "I drink water.",    grammar: "1. Person Singular" },
      { label: "du",  de: "Du trinkst Wasser.",  en: "You drink water.",  grammar: "2. Person Singular" },
      { label: "er",  de: "Er trinkt Wasser.",   en: "He drinks water.",  grammar: "3. Person Singular" },
      { label: "wir", de: "Wir trinken Wasser.", en: "We drink water.",   grammar: "1. Person Plural" }
    ],
    form: [
      { label: "Aussage", de: "Ich trinke Wasser.",      en: "I drink water.",        grammar: "Aussagesatz" },
      { label: "Negativ", de: "Ich trinke kein Wasser.",  en: "I don't drink water.", grammar: "Verneinung (kein)" },
      { label: "Frage",   de: "Trinkst du Wasser?",      en: "Do you drink water?",   grammar: "Ja/Nein-Frage" },
      { label: "W-Frage", de: "Was trinkst du?",         en: "What do you drink?",    grammar: "W-Frage" }
    ],
    modal: [
      { label: "müssen",  de: "Ich muss Wasser trinken.",   en: "I have to drink water.", grammar: "Modalverb: müssen" },
      { label: "wollen",  de: "Ich will Wasser trinken.",   en: "I want to drink water.", grammar: "Modalverb: wollen" },
      { label: "können",  de: "Ich kann Wasser trinken.",   en: "I can drink water.",     grammar: "Modalverb: können" },
      { label: "möchten", de: "Ich möchte Wasser trinken.", en: "I would like to drink water.", grammar: "Modalverb: möchten" }
    ],
    build: [
      { label: "Kern",   de: "Ich trinke Wasser.",                                        en: "I drink water." },
      { label: "+ Menge", de: "Ich trinke viel Wasser.",                                  en: "I drink a lot of water." },
      { label: "+ Zeit", de: "Ich trinke jeden Tag viel Wasser.",                         en: "I drink a lot of water every day." },
      { label: "+ Grund", de: "Ich trinke jeden Tag viel Wasser, weil es gesund ist.",    en: "I drink a lot of water every day because it's healthy." }
    ]
  },

  {
    id: "buch-lesen",
    cat: "Freizeit",
    core: { de: "Ich lese ein Buch.", en: "I read a book." },
    time: [
      { label: "jetzt",   de: "Ich lese ein Buch.",              en: "I read a book.",            grammar: "Präsens" },
      { label: "gestern", de: "Gestern habe ich ein Buch gelesen.", en: "Yesterday I read a book.", grammar: "Perfekt" },
      { label: "morgen",  de: "Morgen lese ich ein Buch.",       en: "Tomorrow I'll read a book.", grammar: "Futur (mit Präsens)" },
      { label: "oft",     de: "Ich lese oft ein Buch.",          en: "I often read a book.",      grammar: "Präsens (Gewohnheit)" }
    ],
    person: [
      { label: "ich", de: "Ich lese ein Buch.",  en: "I read a book.",    grammar: "1. Person Singular" },
      { label: "du",  de: "Du liest ein Buch.",  en: "You read a book.",  grammar: "2. Person Singular" },
      { label: "er",  de: "Er liest ein Buch.",  en: "He reads a book.",  grammar: "3. Person Singular" },
      { label: "wir", de: "Wir lesen ein Buch.", en: "We read a book.",   grammar: "1. Person Plural" }
    ],
    form: [
      { label: "Aussage", de: "Ich lese ein Buch.",     en: "I read a book.",        grammar: "Aussagesatz" },
      { label: "Negativ", de: "Ich lese kein Buch.",     en: "I don't read a book.", grammar: "Verneinung (kein)" },
      { label: "Frage",   de: "Liest du ein Buch?",     en: "Do you read a book?",   grammar: "Ja/Nein-Frage" },
      { label: "W-Frage", de: "Was liest du?",          en: "What do you read?",     grammar: "W-Frage" }
    ],
    modal: [
      { label: "müssen",  de: "Ich muss ein Buch lesen.",   en: "I have to read a book.", grammar: "Modalverb: müssen" },
      { label: "wollen",  de: "Ich will ein Buch lesen.",   en: "I want to read a book.", grammar: "Modalverb: wollen" },
      { label: "können",  de: "Ich kann ein Buch lesen.",   en: "I can read a book.",     grammar: "Modalverb: können" },
      { label: "möchten", de: "Ich möchte ein Buch lesen.", en: "I would like to read a book.", grammar: "Modalverb: möchten" }
    ],
    build: [
      { label: "Kern",   de: "Ich lese ein Buch.",                                          en: "I read a book." },
      { label: "+ Zeit", de: "Ich lese am Abend ein Buch.",                                 en: "I read a book in the evening." },
      { label: "+ Ort",  de: "Ich lese am Abend im Bett ein Buch.",                         en: "I read a book in bed in the evening." },
      { label: "+ Grund", de: "Ich lese am Abend im Bett ein Buch, weil es mich entspannt.", en: "I read a book in bed in the evening because it relaxes me." }
    ]
  }
];
