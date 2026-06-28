/* =========================================================================
   Output drills — "build the whole sentence yourself".
   You read the English situation, then PRODUCE the full German sentence
   (type it or say it). Only after your attempt do you reveal the model
   answer + audio, with CASE colours on the article/ending so you SEE the
   grammar that made it correct.

     🟢 c-nom = Nominativ   🔴 c-akk = Akkusativ
     🔵 c-dat = Dativ       🟣 c-gen = Genitiv

   Drill fields:
     id     stable unique id
     en     the thing to say, in English (the prompt)
     de     model German answer (HTML, with case-colour spans)
     hint   a short grammar / vocab nudge (no full answer)
     level  "A1" | "A2" | "B1"
     theme  topic tag
   ========================================================================= */
window.DRILLS = [
  /* ---------- Introduce yourself / basics ---------- */
  { id: "d001", en: "Say hello and that your name is Janaka.", level: "A1", theme: "Vorstellen",
    hint: "ich heiße + Name", de: "Hallo, ich heiße Janaka." },
  { id: "d002", en: "Say that you come from Sri Lanka.", level: "A1", theme: "Vorstellen",
    hint: "kommen aus + Land", de: "Ich komme aus Sri Lanka." },
  { id: "d003", en: "Say that you live in Switzerland and learn German.", level: "A1", theme: "Vorstellen",
    hint: "wohnen in + Dativ · lernen", de: 'Ich wohne in <span class="c-dat">der Schweiz</span> und lerne Deutsch.' },
  { id: "d004", en: "Ask someone politely how they are.", level: "A1", theme: "Smalltalk",
    hint: "Wie geht es …? (Dativ)", de: 'Wie geht es <span class="c-dat">Ihnen</span>?' },

  /* ---------- Café / restaurant (Akkusativ) ---------- */
  { id: "d010", en: "Order a coffee politely ('I would like a coffee, please').", level: "A1", theme: "Essen",
    hint: "ich hätte gern + Akkusativ", de: 'Ich hätte gern <span class="c-akk">einen</span> Kaffee, bitte.' },
  { id: "d011", en: "Say you would like to pay (ask for the bill).", level: "A2", theme: "Essen",
    hint: "möchten · die Rechnung", de: 'Ich möchte bezahlen, bitte. <span class="c-akk">Die Rechnung</span>, bitte.' },
  { id: "d012", en: "Invite someone: 'Would you like to drink a coffee?'", level: "A2", theme: "Essen",
    hint: "Möchtest du …? + Akkusativ", de: 'Möchtest du <span class="c-akk">einen Kaffee</span> trinken?' },
  { id: "d013", en: "Ask how much it costs.", level: "A1", theme: "Einkaufen",
    hint: "Wie viel …?", de: "Wie viel kostet das?" },

  /* ---------- Directions / city (Nominativ vs Dativ) ---------- */
  { id: "d020", en: "Ask where the train station is.", level: "A1", theme: "Stadt",
    hint: "Wo ist + Nominativ", de: 'Wo ist <span class="c-nom">der Bahnhof</span>?' },
  { id: "d021", en: "Say you go to work by bus.", level: "A2", theme: "Stadt",
    hint: "mit + Dativ (mit dem Bus)", de: 'Ich fahre mit <span class="c-dat">dem Bus</span> zur Arbeit.' },
  { id: "d022", en: "Say you live in a small apartment.", level: "A2", theme: "Wohnen",
    hint: "in + Dativ (in einer …)", de: 'Ich wohne in <span class="c-dat">einer kleinen Wohnung</span>.' },

  /* ---------- Dativ + Akkusativ together (giving / recommending) ---------- */
  { id: "d030", en: "Say you are giving your friend a book.", level: "A2", theme: "Alltag",
    hint: "geben + Dativ (person) + Akkusativ (thing)",
    de: 'Ich gebe <span class="c-dat">meinem Freund</span> <span class="c-akk">ein Buch</span>.' },
  { id: "d031", en: "Recommend a restaurant to a friend.", level: "A2", theme: "Alltag",
    hint: "empfehlen + Dativ + Akkusativ",
    de: 'Ich empfehle <span class="c-dat">dir</span> <span class="c-akk">ein Restaurant</span>.' },
  { id: "d032", en: "Say the bag belongs to the woman.", level: "A2", theme: "Alltag",
    hint: "gehören + Dativ",
    de: '<span class="c-nom">Die Tasche</span> gehört <span class="c-dat">der Frau</span>.' },

  /* ---------- Phone / tech (your class vocab) ---------- */
  { id: "d040", en: "Say the phone doesn't work.", level: "A2", theme: "Technik",
    hint: "funktionieren · nicht", de: '<span class="c-nom">Das Handy</span> funktioniert nicht.' },
  { id: "d041", en: "Say you would like to buy a new phone.", level: "A2", theme: "Technik",
    hint: "möchten + Akkusativ", de: 'Ich möchte <span class="c-akk">ein neues Handy</span> kaufen.' },
  { id: "d042", en: "Ask a colleague: 'Can you give me the charger?'", level: "A2", theme: "Technik",
    hint: "mir (Dativ) + Akkusativ", de: 'Kannst du <span class="c-dat">mir</span> <span class="c-akk">das Ladekabel</span> geben?' },
  { id: "d043", en: "Say you have to switch off the printer.", level: "A2", theme: "Technik",
    hint: "müssen · ausschalten + Akkusativ", de: 'Ich muss <span class="c-akk">den Drucker</span> ausschalten.' },

  /* ---------- Doctor / health ---------- */
  { id: "d050", en: "Say you need help.", level: "A1", theme: "Gesundheit",
    hint: "brauchen + Akkusativ", de: 'Ich brauche <span class="c-akk">Hilfe</span>.' },
  { id: "d051", en: "Tell someone you have a headache.", level: "A2", theme: "Gesundheit",
    hint: "haben · Kopfschmerzen", de: "Ich habe Kopfschmerzen." },
  { id: "d052", en: "Say you'd like to make an appointment (at the doctor).", level: "A2", theme: "Gesundheit",
    hint: "möchten · einen Termin machen", de: 'Ich möchte <span class="c-akk">einen Termin</span> machen.' },

  /* ---------- Permission / requests ---------- */
  { id: "d060", en: "Politely ask if you may open the window.", level: "A2", theme: "Alltag",
    hint: "Darf ich …? + Akkusativ", de: 'Darf ich <span class="c-akk">das Fenster</span> öffnen?' },

  /* ---------- Past & future (ties to the Zukunft page) ---------- */
  { id: "d070", en: "Say what you did yesterday: you worked.", level: "A2", theme: "Vergangenheit",
    hint: "Perfekt: haben + ge…t", de: "Gestern habe ich gearbeitet." },
  { id: "d071", en: "Say that as a child you wanted to be a doctor.", level: "B1", theme: "Zukunft",
    hint: "wollte … werden", de: "Als Kind wollte ich Arzt werden." },
  { id: "d072", en: "Say you will travel to Germany next year.", level: "B1", theme: "Zukunft",
    hint: "werden + Infinitiv (Futur I)", de: "Nächstes Jahr werde ich nach Deutschland reisen." },

  /* ---------- Reasons (weil) ---------- */
  { id: "d080", en: "Say you stay home because it's raining.", level: "B1", theme: "Verbinden",
    hint: "weil → Verb ans Ende", de: "Ich bleibe zu Hause, weil es regnet." },

  /* ============================================================================
     B1 DRILLS (level: "B1") — produce a fuller B1 sentence from the English cue.
     Case-colour spans stay on the case-marking word, like the A1/A2 drills.
     ========================================================================== */

  /* ---------- Arbeit & Bewerbung ---------- */
  { id: "d100", en: "Say you're applying for a new job.", level: "B1", theme: "Arbeit",
    hint: "sich bewerben um + Akkusativ", de: 'Ich bewerbe mich um <span class="c-akk">eine neue Stelle</span>.' },
  { id: "d101", en: "Say you have a job interview tomorrow.", level: "B1", theme: "Arbeit",
    hint: "haben + Akkusativ", de: 'Morgen habe ich <span class="c-akk">ein Vorstellungsgespräch</span>.' },
  { id: "d102", en: "Say you're taking responsibility for the project.", level: "B1", theme: "Arbeit",
    hint: "übernehmen + Akkusativ", de: 'Ich übernehme <span class="c-akk">die Verantwortung</span> für <span class="c-akk">das Projekt</span>.' },
  { id: "d103", en: "Say you gave your company notice.", level: "B1", theme: "Arbeit",
    hint: "kündigen + Dativ (Perfekt)", de: 'Ich habe <span class="c-dat">meiner Firma</span> gekündigt.' },

  /* ---------- Meinung & Konnektoren ---------- */
  { id: "d104", en: "Say you go out although it's raining.", level: "B1", theme: "Verbinden",
    hint: "obwohl → Verb ans Ende", de: "Ich gehe raus, obwohl es regnet." },
  { id: "d105", en: "Say it was expensive, that's why you didn't buy it.", level: "B1", theme: "Verbinden",
    hint: "deshalb → Verb 2. Position", de: 'Es war teuer, deshalb habe ich <span class="c-akk">es</span> nicht gekauft.' },
  { id: "d106", en: "Say: the more you practise, the better you get.", level: "B1", theme: "Verbinden",
    hint: "je … desto", de: "Je mehr ich übe, desto besser werde ich." },
  { id: "d107", en: "Say you think that he is right.", level: "B1", theme: "Verbinden",
    hint: "dass → Verb ans Ende", de: "Ich denke, dass er recht hat." },

  /* ---------- Ziele: um … zu / damit ---------- */
  { id: "d108", en: "Say you learn German in order to find a job.", level: "B1", theme: "Ziele",
    hint: "um … zu + Infinitiv", de: 'Ich lerne Deutsch, um <span class="c-akk">eine Arbeit</span> zu finden.' },
  { id: "d109", en: "Say you speak slowly so that they understand you.", level: "B1", theme: "Ziele",
    hint: "damit (neues Subjekt)", de: "Ich spreche langsam, damit sie mich verstehen." },

  /* ---------- Konjunktiv II (höflich / hypothetisch) ---------- */
  { id: "d110", en: "Politely ask: 'Could you help me?'", level: "B1", theme: "Höflich",
    hint: "Könnten Sie …? + Dativ", de: 'Könnten Sie <span class="c-dat">mir</span> helfen?' },
  { id: "d111", en: "Say: if you had time, you would come along.", level: "B1", theme: "Höflich",
    hint: "Wenn … hätte, würde …", de: "Wenn ich Zeit hätte, würde ich mitkommen." },
  { id: "d112", en: "Say what you'd do in their place: ask the doctor.", level: "B1", theme: "Höflich",
    hint: "An deiner Stelle würde ich …", de: 'An deiner Stelle würde ich <span class="c-akk">den Arzt</span> fragen.' },

  /* ---------- Passiv ---------- */
  { id: "d113", en: "Say the house is being renovated right now.", level: "B1", theme: "Passiv",
    hint: "Passiv: wird + Partizip", de: '<span class="c-nom">Das Haus</span> wird gerade renoviert.' },
  { id: "d114", en: "Say the letter has already been written.", level: "B1", theme: "Passiv",
    hint: "Passiv Perfekt: ist … worden", de: '<span class="c-nom">Der Brief</span> ist schon geschrieben worden.' },

  /* ---------- Relativsätze ---------- */
  { id: "d115", en: "Say: that's the man who lives next door.", level: "B1", theme: "Relativsatz",
    hint: "Relativpronomen: der (Nom.)", de: '<span class="c-nom">Das ist der Mann</span>, <span class="c-nom">der</span> nebenan wohnt.' },
  { id: "d116", en: "Say: the book I'm reading is exciting.", level: "B1", theme: "Relativsatz",
    hint: "Relativpronomen: das (Akk.)", de: '<span class="c-nom">Das Buch</span>, <span class="c-akk">das</span> ich lese, ist spannend.' },

  /* ---------- Umwelt & Gesellschaft ---------- */
  { id: "d117", en: "Say we have to protect the environment.", level: "B1", theme: "Umwelt",
    hint: "müssen + Akkusativ", de: 'Wir müssen <span class="c-akk">die Umwelt</span> schützen.' },
  { id: "d118", en: "Say you should avoid unnecessary waste.", level: "B1", theme: "Umwelt",
    hint: "sollte + Akkusativ", de: 'Man sollte <span class="c-akk">unnötigen Müll</span> vermeiden.' },
  { id: "d119", en: "Say the government passed a new law.", level: "B1", theme: "Gesellschaft",
    hint: "Perfekt + Akkusativ", de: 'Die Regierung hat <span class="c-akk">ein neues Gesetz</span> beschlossen.' },

  /* ---------- Gefühle & Alltag ---------- */
  { id: "d120", en: "Say you're looking forward to the weekend.", level: "B1", theme: "Gefühle",
    hint: "sich freuen auf + Akkusativ", de: 'Ich freue mich auf <span class="c-akk">das Wochenende</span>.' },
  { id: "d121", en: "Say he gets annoyed about the noise.", level: "B1", theme: "Gefühle",
    hint: "sich ärgern über + Akkusativ", de: 'Er ärgert sich über <span class="c-akk">den Lärm</span>.' },
  { id: "d122", en: "Apologize for being late.", level: "B1", theme: "Höflich",
    hint: "sich entschuldigen für + Akkusativ", de: 'Ich entschuldige mich für <span class="c-akk">die Verspätung</span>.' },
  { id: "d123", en: "Make a complaint: the heating doesn't work.", level: "B1", theme: "Alltag",
    hint: "sich beschweren · funktionieren", de: 'Ich möchte mich beschweren: <span class="c-nom">die Heizung</span> funktioniert nicht.' },

  /* ---------- Indirekte Fragen ---------- */
  { id: "d124", en: "Politely ask where the station is (indirect).", level: "B1", theme: "Fragen",
    hint: "Können Sie mir sagen, wo … ist?", de: '<span class="c-nom">Können Sie</span> mir sagen, wo der Bahnhof ist?' },
  { id: "d125", en: "Ask whether the shop is still open (indirect).", level: "B1", theme: "Fragen",
    hint: "ob → Verb ans Ende", de: 'Ich möchte wissen, ob der Laden noch offen ist.' },

  /* ---------- Temporale Nebensätze ---------- */
  { id: "d126", en: "Say: when you were young, you lived in Bern.", level: "B1", theme: "Vergangenheit",
    hint: "als (einmalige Vergangenheit)", de: 'Als <span class="c-nom">ich</span> jung war, wohnte <span class="c-nom">ich</span> in Bern.' },
  { id: "d127", en: "Say: after you had eaten, you went to sleep.", level: "B1", theme: "Vergangenheit",
    hint: "nachdem + Plusquamperfekt", de: 'Nachdem <span class="c-nom">ich</span> gegessen hatte, ging <span class="c-nom">ich</span> schlafen.' },

  /* ---------- Genitiv-Präpositionen ---------- */
  { id: "d128", en: "Say you stayed home because of the bad weather.", level: "B1", theme: "Verbinden",
    hint: "wegen + Genitiv", de: 'Wegen <span class="c-gen">des schlechten Wetters</span> bin <span class="c-nom">ich</span> zu Hause geblieben.' },
  { id: "d129", en: "Say: despite the rain, you go for a walk.", level: "B1", theme: "Verbinden",
    hint: "trotz + Genitiv", de: 'Trotz <span class="c-gen">des Regens</span> gehe <span class="c-nom">ich</span> spazieren.' },

  /* ---------- Verben mit Präposition ---------- */
  { id: "d130", en: "Say you're waiting for the bus.", level: "B1", theme: "Verben+Präp",
    hint: "warten auf + Akkusativ", de: 'Ich warte auf <span class="c-akk">den Bus</span>.' },
  { id: "d131", en: "Say you often think of your family.", level: "B1", theme: "Verben+Präp",
    hint: "denken an + Akkusativ", de: 'Ich denke oft an <span class="c-akk">meine Familie</span>.' },
  { id: "d132", en: "Say you're taking part in a German course.", level: "B1", theme: "Verben+Präp",
    hint: "teilnehmen an + Dativ", de: 'Ich nehme an <span class="c-dat">einem Deutschkurs</span> teil.' },

  /* ---------- Konjunktiv II Vergangenheit ---------- */
  { id: "d133", en: "Say: if you had known that, you wouldn't have come.", level: "B1", theme: "Höflich",
    hint: "hätte … gewusst, wäre … gekommen", de: 'Wenn <span class="c-nom">ich</span> das gewusst hätte, wäre <span class="c-nom">ich</span> nicht gekommen.' },

  /* ---------- Meinung & Bildung ---------- */
  { id: "d134", en: "Say it's important to practise every day.", level: "B1", theme: "Ziele",
    hint: "Es ist wichtig, … zu + Infinitiv", de: 'Es ist wichtig, jeden Tag zu üben.' },
  { id: "d135", en: "Say you're making good progress in German.", level: "B1", theme: "Bildung",
    hint: "Fortschritte machen in + Dativ", de: 'Ich mache <span class="c-akk">gute Fortschritte</span> in <span class="c-dat">Deutsch</span>.' },
  { id: "d136", en: "Say the advantage is that you save time.", level: "B1", theme: "Verbinden",
    hint: "Der Vorteil ist, dass …", de: '<span class="c-nom">Der Vorteil</span> ist, dass <span class="c-nom">ich</span> Zeit spare.' },
  { id: "d137", en: "Suggest that you meet tomorrow.", level: "B1", theme: "Verbinden",
    hint: "vorschlagen, dass …", de: 'Ich schlage vor, dass <span class="c-nom">wir</span> uns morgen treffen.' }
];
