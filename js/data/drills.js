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
    hint: "weil → Verb ans Ende", de: "Ich bleibe zu Hause, weil es regnet." }
];
