/* =========================================================================
   FSRS study deck — high-frequency German words & chunks, each shown inside a
   full example sentence with CASE colours on the case-marking article/ending:
     <span class="c-nom">…</span>  green  = Nominativ (subject)
     <span class="c-akk">…</span>  red    = Akkusativ (direct object)
     <span class="c-dat">…</span>  blue   = Dativ (indirect object)
     <span class="c-gen">…</span>  purple = Genitiv (possession)

   Card fields:
     id     unique, stable (used as the FSRS scheduling key — never reuse/renumber)
     de     the target German word/chunk (the thing you are learning)
     en     English meaning
     ex     German example sentence (HTML, with case-colour spans)
     exEn   English translation of the example
     theme  topic tag (for filtering)
     level  "A1" | "A2" | "B1"

   This is a curated STARTER deck designed to grow toward ~500–1000 items.
   Add more objects below — keep ids unique and the structure identical.
   ========================================================================= */
window.CARDS = [
  /* ===================== Core verbs in context ===================== */
  { id: "c0001", de: "sein", en: "to be", level: "A1", theme: "Verben",
    ex: '<span class="c-nom">Ich</span> bin müde.', exEn: "I am tired." },
  { id: "c0002", de: "haben", en: "to have", level: "A1", theme: "Verben",
    ex: '<span class="c-nom">Ich</span> habe <span class="c-akk">einen Bruder</span>.', exEn: "I have a brother." },
  { id: "c0003", de: "gehen", en: "to go", level: "A1", theme: "Verben",
    ex: '<span class="c-nom">Wir</span> gehen <span class="c-akk">ins Kino</span>.', exEn: "We are going to the cinema." },
  { id: "c0004", de: "machen", en: "to do / make", level: "A1", theme: "Verben",
    ex: 'Was machst <span class="c-nom">du</span> heute?', exEn: "What are you doing today?" },
  { id: "c0005", de: "geben", en: "to give", level: "A1", theme: "Verben",
    ex: '<span class="c-nom">Ich</span> gebe <span class="c-dat">dem Kind</span> <span class="c-akk">einen Apfel</span>.', exEn: "I give the child an apple." },
  { id: "c0006", de: "helfen", en: "to help (+ Dativ)", level: "A2", theme: "Verben",
    ex: '<span class="c-nom">Ich</span> helfe <span class="c-dat">meinem Freund</span>.', exEn: "I help my friend." },
  { id: "c0007", de: "geben + Dativ + Akkusativ", en: "to give sb sth", level: "A2", theme: "Verben",
    ex: '<span class="c-nom">Er</span> gibt <span class="c-dat">der Frau</span> <span class="c-akk">das Buch</span>.', exEn: "He gives the woman the book." },
  { id: "c0008", de: "brauchen", en: "to need", level: "A1", theme: "Verben",
    ex: '<span class="c-nom">Ich</span> brauche <span class="c-akk">deine Hilfe</span>.', exEn: "I need your help." },
  { id: "c0009", de: "kennen", en: "to know (a person/place)", level: "A1", theme: "Verben",
    ex: 'Kennst <span class="c-nom">du</span> <span class="c-akk">diesen Mann</span>?', exEn: "Do you know this man?" },
  { id: "c0010", de: "wissen", en: "to know (a fact)", level: "A1", theme: "Verben",
    ex: '<span class="c-nom">Ich</span> weiß <span class="c-akk">die Antwort</span> nicht.', exEn: "I don't know the answer." },
  { id: "c0011", de: "gehören", en: "to belong to (+ Dativ)", level: "A2", theme: "Verben",
    ex: '<span class="c-nom">Das Auto</span> gehört <span class="c-dat">meinem Vater</span>.', exEn: "The car belongs to my father." },
  { id: "c0012", de: "gefallen", en: "to please / to like (+ Dativ)", level: "A2", theme: "Verben",
    ex: '<span class="c-nom">Die Stadt</span> gefällt <span class="c-dat">mir</span> sehr.', exEn: "I really like the city." },
  { id: "c0013", de: "empfehlen", en: "to recommend", level: "B1", theme: "Verben",
    ex: '<span class="c-nom">Ich</span> empfehle <span class="c-dat">dir</span> <span class="c-akk">dieses Restaurant</span>.', exEn: "I recommend this restaurant to you." },
  { id: "c0014", de: "schicken", en: "to send", level: "A2", theme: "Verben",
    ex: '<span class="c-nom">Sie</span> schickt <span class="c-dat">ihrer Freundin</span> <span class="c-akk">eine Nachricht</span>.', exEn: "She sends her friend a message." },
  { id: "c0015", de: "erklären", en: "to explain", level: "A2", theme: "Verben",
    ex: 'Kannst <span class="c-nom">du</span> <span class="c-dat">mir</span> <span class="c-akk">das Wort</span> erklären?', exEn: "Can you explain the word to me?" },

  /* ===================== People & Family ===================== */
  { id: "c0101", de: "der Mann", en: "the man", level: "A1", theme: "Menschen",
    ex: '<span class="c-nom">Der Mann</span> liest <span class="c-akk">die Zeitung</span>.', exEn: "The man is reading the newspaper." },
  { id: "c0102", de: "die Frau", en: "the woman", level: "A1", theme: "Menschen",
    ex: '<span class="c-nom">Ich</span> sehe <span class="c-akk">die Frau</span> dort.', exEn: "I see the woman over there." },
  { id: "c0103", de: "das Kind", en: "the child", level: "A1", theme: "Menschen",
    ex: '<span class="c-nom">Ich</span> gebe <span class="c-dat">dem Kind</span> <span class="c-akk">ein Eis</span>.', exEn: "I give the child an ice cream." },
  { id: "c0104", de: "der Freund", en: "the friend (male)", level: "A1", theme: "Menschen",
    ex: '<span class="c-nom">Ich</span> fahre mit <span class="c-dat">meinem Freund</span> nach Berlin.', exEn: "I'm travelling to Berlin with my friend." },
  { id: "c0105", de: "die Familie", en: "the family", level: "A1", theme: "Menschen",
    ex: '<span class="c-nom">Das ist das Haus</span> <span class="c-gen">meiner Familie</span>.', exEn: "This is my family's house." },
  { id: "c0106", de: "der Nachbar", en: "the neighbour", level: "A2", theme: "Menschen",
    ex: '<span class="c-nom">Ich</span> helfe <span class="c-dat">dem Nachbarn</span> im Garten.', exEn: "I help the neighbour in the garden." },
  { id: "c0107", de: "der Kollege", en: "the colleague", level: "A2", theme: "Arbeit",
    ex: '<span class="c-nom">Ich</span> arbeite mit <span class="c-dat">einem netten Kollegen</span>.', exEn: "I work with a nice colleague." },

  /* ===================== Home & Everyday objects ===================== */
  { id: "c0201", de: "das Haus", en: "the house", level: "A1", theme: "Wohnen",
    ex: '<span class="c-nom">Das Haus</span> <span class="c-gen">meiner Eltern</span> ist alt.', exEn: "My parents' house is old." },
  { id: "c0202", de: "die Wohnung", en: "the flat / apartment", level: "A1", theme: "Wohnen",
    ex: '<span class="c-nom">Ich</span> wohne in <span class="c-dat">einer kleinen Wohnung</span>.', exEn: "I live in a small flat." },
  { id: "c0203", de: "der Tisch", en: "the table", level: "A1", theme: "Wohnen",
    ex: '<span class="c-nom">Das Buch</span> liegt auf <span class="c-dat">dem Tisch</span>.', exEn: "The book is on the table." },
  { id: "c0204", de: "der Stuhl", en: "the chair", level: "A1", theme: "Wohnen",
    ex: '<span class="c-nom">Ich</span> stelle <span class="c-akk">den Stuhl</span> an <span class="c-akk">den Tisch</span>.', exEn: "I put the chair by the table." },
  { id: "c0205", de: "das Fenster", en: "the window", level: "A1", theme: "Wohnen",
    ex: 'Mach bitte <span class="c-akk">das Fenster</span> zu!', exEn: "Please close the window!" },
  { id: "c0206", de: "der Schlüssel", en: "the key", level: "A2", theme: "Alltag",
    ex: '<span class="c-nom">Ich</span> suche <span class="c-akk">meinen Schlüssel</span>.', exEn: "I'm looking for my key." },

  /* ===================== Food & Drink ===================== */
  { id: "c0301", de: "das Brot", en: "the bread", level: "A1", theme: "Essen",
    ex: '<span class="c-nom">Ich</span> kaufe <span class="c-akk">frisches Brot</span>.', exEn: "I'm buying fresh bread." },
  { id: "c0302", de: "der Kaffee", en: "the coffee", level: "A1", theme: "Essen",
    ex: 'Möchtest <span class="c-nom">du</span> <span class="c-akk">einen Kaffee</span>?', exEn: "Would you like a coffee?" },
  { id: "c0303", de: "das Wasser", en: "the water", level: "A1", theme: "Essen",
    ex: '<span class="c-nom">Ich</span> trinke <span class="c-akk">ein Glas Wasser</span>.', exEn: "I'm drinking a glass of water." },
  { id: "c0304", de: "der Apfel", en: "the apple", level: "A1", theme: "Essen",
    ex: '<span class="c-nom">Ich</span> gebe <span class="c-dat">dem Kind</span> <span class="c-akk">einen Apfel</span>.', exEn: "I give the child an apple." },
  { id: "c0305", de: "die Rechnung", en: "the bill", level: "A2", theme: "Essen",
    ex: '<span class="c-nom">Wir</span> möchten <span class="c-akk">die Rechnung</span>, bitte.', exEn: "We'd like the bill, please." },

  /* ===================== City, Travel & Transport ===================== */
  { id: "c0401", de: "die Stadt", en: "the city / town", level: "A1", theme: "Stadt",
    ex: '<span class="c-nom">Ich</span> wohne in <span class="c-dat">einer großen Stadt</span>.', exEn: "I live in a big city." },
  { id: "c0402", de: "der Bahnhof", en: "the train station", level: "A1", theme: "Reisen",
    ex: 'Wie komme <span class="c-nom">ich</span> zu <span class="c-dat">dem Bahnhof</span>?', exEn: "How do I get to the station?" },
  { id: "c0403", de: "der Zug", en: "the train", level: "A1", theme: "Reisen",
    ex: '<span class="c-nom">Der Zug</span> kommt um neun Uhr an.', exEn: "The train arrives at nine." },
  { id: "c0404", de: "das Auto", en: "the car", level: "A1", theme: "Reisen",
    ex: '<span class="c-nom">Ich</span> fahre mit <span class="c-dat">dem Auto</span> zur Arbeit.', exEn: "I drive to work by car." },
  { id: "c0405", de: "die Straße", en: "the street", level: "A1", theme: "Stadt",
    ex: 'Geh <span class="c-akk">die zweite Straße</span> links.', exEn: "Take the second street on the left." },
  { id: "c0406", de: "der Weg", en: "the way / path", level: "A2", theme: "Stadt",
    ex: 'Kannst <span class="c-nom">du</span> <span class="c-dat">mir</span> <span class="c-akk">den Weg</span> zeigen?', exEn: "Can you show me the way?" },

  /* ===================== Work, Money & Study ===================== */
  { id: "c0501", de: "die Arbeit", en: "the work / job", level: "A1", theme: "Arbeit",
    ex: '<span class="c-nom">Die Arbeit</span> macht <span class="c-dat">mir</span> Spaß.', exEn: "I enjoy the work." },
  { id: "c0502", de: "das Geld", en: "the money", level: "A1", theme: "Arbeit",
    ex: '<span class="c-nom">Ich</span> habe <span class="c-akk">kein Geld</span> dabei.', exEn: "I have no money on me." },
  { id: "c0503", de: "der Chef", en: "the boss", level: "A2", theme: "Arbeit",
    ex: '<span class="c-nom">Ich</span> spreche mit <span class="c-dat">meinem Chef</span>.', exEn: "I'm speaking with my boss." },
  { id: "c0504", de: "der Vertrag", en: "the contract", level: "A2", theme: "Arbeit",
    ex: 'Pass auf, dass <span class="c-nom">du</span> <span class="c-akk">den Vertrag</span> kündigen kannst.', exEn: "Make sure you can cancel the contract." },
  { id: "c0505", de: "die Prüfung", en: "the exam", level: "A2", theme: "Lernen",
    ex: '<span class="c-nom">Ich</span> bereite mich auf <span class="c-akk">die Prüfung</span> vor.', exEn: "I'm preparing for the exam." },
  { id: "c0506", de: "die Erfahrung", en: "the experience", level: "B1", theme: "Arbeit",
    ex: 'Trotz <span class="c-gen">seiner Erfahrung</span> war <span class="c-nom">er</span> nervös.', exEn: "Despite his experience he was nervous." },

  /* ===================== Technik (from class) ===================== */
  { id: "c0601", de: "das Handy", en: "the mobile phone", level: "A1", theme: "Technik",
    ex: '<span class="c-nom">Mein Handy</span> ist kaputt.', exEn: "My phone is broken." },
  { id: "c0602", de: "die Reparatur", en: "the repair", level: "A2", theme: "Technik",
    ex: 'Lohnt sich <span class="c-nom">die Reparatur</span>?', exEn: "Is the repair worth it?" },
  { id: "c0603", de: "der Drucker", en: "the printer", level: "A1", theme: "Technik",
    ex: 'Schalte <span class="c-akk">den Drucker</span> aus und wieder ein.', exEn: "Switch the printer off and on again." },
  { id: "c0604", de: "der Anschluss", en: "the connection / socket", level: "A2", theme: "Technik",
    ex: '<span class="c-nom">Du</span> musst zuerst <span class="c-akk">den Anschluss</span> prüfen.', exEn: "You must check the connection first." },

  /* ===================== Abstract & Useful ===================== */
  { id: "c0701", de: "die Idee", en: "the idea", level: "A2", theme: "Abstrakt",
    ex: '<span class="c-nom">Das</span> ist <span class="c-nom">eine gute Idee</span>.', exEn: "That's a good idea." },
  { id: "c0702", de: "der Grund", en: "the reason", level: "A2", theme: "Abstrakt",
    ex: 'Was ist <span class="c-nom">der Grund</span> für <span class="c-akk">die Verspätung</span>?', exEn: "What's the reason for the delay?" },
  { id: "c0703", de: "die Meinung", en: "the opinion", level: "A2", theme: "Abstrakt",
    ex: 'Nach <span class="c-dat">meiner Meinung</span> ist <span class="c-nom">das</span> falsch.', exEn: "In my opinion that's wrong." },
  { id: "c0704", de: "die Entscheidung", en: "the decision", level: "B1", theme: "Abstrakt",
    ex: '<span class="c-nom">Das</span> war <span class="c-nom">die richtige Entscheidung</span>.', exEn: "That was the right decision." },
  { id: "c0705", de: "die Möglichkeit", en: "the possibility / option", level: "B1", theme: "Abstrakt",
    ex: '<span class="c-nom">Es</span> gibt <span class="c-akk">eine andere Möglichkeit</span>.', exEn: "There's another option." },

  /* ===================== Everyday chunks (sentences) ===================== */
  { id: "c0801", de: "Wie geht es dir?", en: "How are you?", level: "A1", theme: "Chunks",
    ex: 'Hallo! Wie geht es <span class="c-dat">dir</span> heute?', exEn: "Hi! How are you today?" },
  { id: "c0802", de: "Ich hätte gern …", en: "I'd like … (polite)", level: "A1", theme: "Chunks",
    ex: '<span class="c-nom">Ich</span> hätte gern <span class="c-akk">einen Kaffee</span>, bitte.', exEn: "I'd like a coffee, please." },
  { id: "c0803", de: "Können Sie mir helfen?", en: "Can you help me?", level: "A1", theme: "Chunks",
    ex: 'Entschuldigung, können <span class="c-nom">Sie</span> <span class="c-dat">mir</span> helfen?', exEn: "Excuse me, can you help me?" },
  { id: "c0804", de: "Ich verstehe das nicht.", en: "I don't understand that.", level: "A1", theme: "Chunks",
    ex: 'Langsam bitte — <span class="c-nom">ich</span> verstehe <span class="c-akk">das</span> nicht.', exEn: "Slowly please — I don't understand that." },
  { id: "c0805", de: "Es tut mir leid.", en: "I'm sorry.", level: "A1", theme: "Chunks",
    ex: '<span class="c-nom">Es</span> tut <span class="c-dat">mir</span> leid.', exEn: "I'm sorry." },
  { id: "c0806", de: "Ich freue mich auf …", en: "I'm looking forward to …", level: "A2", theme: "Chunks",
    ex: '<span class="c-nom">Ich</span> freue mich auf <span class="c-akk">das Wochenende</span>.', exEn: "I'm looking forward to the weekend." },
  { id: "c0807", de: "Ich interessiere mich für …", en: "I'm interested in …", level: "A2", theme: "Chunks",
    ex: '<span class="c-nom">Ich</span> interessiere mich für <span class="c-akk">Musik</span>.', exEn: "I'm interested in music." },
  { id: "c0808", de: "Meiner Meinung nach …", en: "In my opinion …", level: "B1", theme: "Chunks",
    ex: '<span class="c-dat">Meiner Meinung</span> nach hat <span class="c-nom">er</span> recht.', exEn: "In my opinion he's right." },

  /* ===================== Connectors & word order ===================== */
  { id: "c0901", de: "weil", en: "because (verb to the end)", level: "A2", theme: "Grammatik",
    ex: '<span class="c-nom">Ich</span> bleibe zu Hause, weil <span class="c-nom">ich</span> krank bin.', exEn: "I'm staying home because I'm sick." },
  { id: "c0902", de: "dass", en: "that (verb to the end)", level: "A2", theme: "Grammatik",
    ex: '<span class="c-nom">Ich</span> denke, dass <span class="c-nom">du</span> recht hast.', exEn: "I think that you're right." },
  { id: "c0903", de: "deshalb", en: "therefore (verb 2nd)", level: "A2", theme: "Grammatik",
    ex: '<span class="c-nom">Ich</span> bin müde, deshalb gehe <span class="c-nom">ich</span> ins Bett.', exEn: "I'm tired, so I'm going to bed." },
  { id: "c0904", de: "wenn", en: "if / when", level: "A2", theme: "Grammatik",
    ex: 'Wenn <span class="c-nom">ich</span> Zeit habe, rufe <span class="c-nom">ich</span> <span class="c-akk">dich</span> an.', exEn: "If I have time, I'll call you." },
  { id: "c0905", de: "trotzdem", en: "nevertheless", level: "B1", theme: "Grammatik",
    ex: '<span class="c-nom">Es</span> regnet, trotzdem gehe <span class="c-nom">ich</span> raus.', exEn: "It's raining; nevertheless I go out." },
  { id: "c0906", de: "obwohl", en: "although (verb to the end)", level: "B1", theme: "Grammatik",
    ex: '<span class="c-nom">Ich</span> gehe arbeiten, obwohl <span class="c-nom">ich</span> krank bin.', exEn: "I go to work although I'm sick." },

  /* ===================== Time & frequency ===================== */
  { id: "c1001", de: "heute", en: "today", level: "A1", theme: "Zeit",
    ex: 'Heute hat <span class="c-nom">der Laden</span> bis acht Uhr offen.', exEn: "Today the shop is open until eight." },
  { id: "c1002", de: "morgen", en: "tomorrow", level: "A1", theme: "Zeit",
    ex: 'Morgen besuche <span class="c-nom">ich</span> <span class="c-akk">meine Oma</span>.', exEn: "Tomorrow I'll visit my grandma." },
  { id: "c1003", de: "am Wochenende", en: "on the weekend", level: "A1", theme: "Zeit",
    ex: 'Am Wochenende treffe <span class="c-nom">ich</span> <span class="c-akk">meine Freunde</span>.', exEn: "On the weekend I meet my friends." },
  { id: "c1004", de: "seit", en: "since / for (+ Dativ)", level: "A2", theme: "Zeit",
    ex: '<span class="c-nom">Ich</span> lerne seit <span class="c-dat">einem Jahr</span> Deutsch.', exEn: "I've been learning German for a year." },
  { id: "c1005", de: "während", en: "during (+ Genitiv)", level: "B1", theme: "Zeit",
    ex: 'Während <span class="c-gen">der Woche</span> habe <span class="c-nom">ich</span> wenig Zeit.', exEn: "During the week I have little time." },

  /* ===================== Future / life (ties to Zukunft page) ===================== */
  { id: "c1101", de: "werden (Futur)", en: "will (future)", level: "A2", theme: "Zukunft",
    ex: '<span class="c-nom">Ich</span> werde <span class="c-akk">nächstes Jahr</span> nach Deutschland reisen.', exEn: "Next year I will travel to Germany." },
  { id: "c1102", de: "werden (= become)", en: "to become", level: "A2", theme: "Zukunft",
    ex: 'Mit fünfzig werde <span class="c-nom">ich</span> Geschäftsmann.', exEn: "At fifty I will become a businessman." },
  { id: "c1103", de: "wurde", en: "became (past)", level: "B1", theme: "Zukunft",
    ex: 'Mit dreißig wurde <span class="c-nom">ich</span> Ingenieur.', exEn: "At thirty I became an engineer." },
  { id: "c1104", de: "wollte", en: "wanted to (past)", level: "A2", theme: "Zukunft",
    ex: 'Mit fünfzehn wollte <span class="c-nom">ich</span> Arzt werden.', exEn: "At fifteen I wanted to become a doctor." },
  { id: "c1105", de: "würde gern", en: "would like to", level: "B1", theme: "Zukunft",
    ex: 'Eines Tages würde <span class="c-nom">ich</span> gern <span class="c-akk">eine eigene Firma</span> haben.', exEn: "One day I'd like to have my own company." },

  /* ============================================================================
     B1 CARDS (level: "B1") — work, society, environment, abstract, grammar B1.
     Case-colour spans kept on the case-marking word, exactly like A1/A2 cards.
     ========================================================================== */

  /* ---------------------- Arbeit & Beruf ---------------------- */
  { id: "c1200", de: "sich bewerben", en: "to apply (um = for)", level: "B1", theme: "Arbeit",
    ex: '<span class="c-nom">Ich</span> bewerbe mich um <span class="c-akk">eine neue Stelle</span>.', exEn: "I'm applying for a new position." },
  { id: "c1201", de: "die Bewerbung", en: "the application", level: "B1", theme: "Arbeit",
    ex: '<span class="c-nom">Meine Bewerbung</span> hat <span class="c-akk">die Firma</span> überzeugt.', exEn: "My application convinced the company." },
  { id: "c1202", de: "das Vorstellungsgespräch", en: "the job interview", level: "B1", theme: "Arbeit",
    ex: 'Morgen habe <span class="c-nom">ich</span> <span class="c-akk">ein Vorstellungsgespräch</span>.', exEn: "Tomorrow I have a job interview." },
  { id: "c1203", de: "das Gehalt", en: "the salary", level: "B1", theme: "Arbeit",
    ex: '<span class="c-nom">Das Gehalt</span> hängt von <span class="c-dat">der Erfahrung</span> ab.', exEn: "The salary depends on experience." },
  { id: "c1204", de: "kündigen", en: "to quit / give notice", level: "B1", theme: "Arbeit",
    ex: '<span class="c-nom">Er</span> hat <span class="c-dat">seiner Firma</span> gekündigt.', exEn: "He gave his company notice." },
  { id: "c1205", de: "die Verantwortung", en: "the responsibility", level: "B1", theme: "Arbeit",
    ex: '<span class="c-nom">Sie</span> übernimmt <span class="c-akk">die Verantwortung</span> für <span class="c-akk">das Projekt</span>.', exEn: "She takes responsibility for the project." },
  { id: "c1206", de: "der Erfolg", en: "the success", level: "B1", theme: "Arbeit",
    ex: '<span class="c-nom">Der Erfolg</span> war <span class="c-gen">des Teams</span> Verdienst.', exEn: "The success was the team's achievement." },
  { id: "c1207", de: "die Überstunde", en: "the overtime hour", level: "B1", theme: "Arbeit",
    ex: '<span class="c-nom">Ich</span> mache diese Woche <span class="c-akk">viele Überstunden</span>.', exEn: "I'm doing a lot of overtime this week." },

  /* ---------------------- Bildung ---------------------- */
  { id: "c1210", de: "die Ausbildung", en: "the vocational training", level: "B1", theme: "Bildung",
    ex: '<span class="c-nom">Meine Tochter</span> beginnt <span class="c-akk">eine Ausbildung</span> als Krankenschwester.', exEn: "My daughter is starting training as a nurse." },
  { id: "c1211", de: "das Studium", en: "the (university) studies", level: "B1", theme: "Bildung",
    ex: 'Während <span class="c-gen">des Studiums</span> hat <span class="c-nom">er</span> gejobbt.', exEn: "During his studies he had a side job." },
  { id: "c1212", de: "der Fortschritt", en: "the progress", level: "B1", theme: "Bildung",
    ex: '<span class="c-nom">Du</span> machst <span class="c-akk">große Fortschritte</span> in <span class="c-dat">Deutsch</span>.', exEn: "You're making great progress in German." },
  { id: "c1213", de: "sich konzentrieren", en: "to concentrate (auf = on)", level: "B1", theme: "Bildung",
    ex: '<span class="c-nom">Ich</span> kann mich nicht auf <span class="c-akk">die Arbeit</span> konzentrieren.', exEn: "I can't concentrate on the work." },
  { id: "c1214", de: "das Wissen", en: "the knowledge", level: "B1", theme: "Bildung",
    ex: '<span class="c-nom">Sein Wissen</span> über <span class="c-akk">Geschichte</span> ist beeindruckend.', exEn: "His knowledge of history is impressive." },

  /* ---------------------- Umwelt & Natur ---------------------- */
  { id: "c1220", de: "die Umwelt", en: "the environment", level: "B1", theme: "Umwelt",
    ex: '<span class="c-nom">Wir</span> müssen <span class="c-akk">die Umwelt</span> schützen.', exEn: "We must protect the environment." },
  { id: "c1221", de: "der Klimawandel", en: "the climate change", level: "B1", theme: "Umwelt",
    ex: '<span class="c-nom">Der Klimawandel</span> betrifft <span class="c-akk">uns alle</span>.', exEn: "Climate change affects us all." },
  { id: "c1222", de: "vermeiden", en: "to avoid", level: "B1", theme: "Umwelt",
    ex: '<span class="c-nom">Man</span> sollte <span class="c-akk">unnötigen Müll</span> vermeiden.', exEn: "One should avoid unnecessary waste." },
  { id: "c1223", de: "die Energie", en: "the energy", level: "B1", theme: "Umwelt",
    ex: '<span class="c-nom">Wir</span> sparen <span class="c-akk">Energie</span> mit <span class="c-dat">neuen Geräten</span>.', exEn: "We save energy with new appliances." },
  { id: "c1224", de: "der Müll", en: "the rubbish / waste", level: "B1", theme: "Umwelt",
    ex: '<span class="c-nom">Ich</span> trenne <span class="c-akk">den Müll</span> zu Hause.', exEn: "I separate the waste at home." },

  /* ---------------------- Gesundheit & Ernährung ---------------------- */
  { id: "c1230", de: "die Ernährung", en: "the nutrition / diet", level: "B1", theme: "Gesundheit",
    ex: '<span class="c-nom">Eine gesunde Ernährung</span> ist <span class="c-dat">mir</span> wichtig.', exEn: "A healthy diet is important to me." },
  { id: "c1231", de: "sich erholen", en: "to recover / relax", level: "B1", theme: "Gesundheit",
    ex: 'Im Urlaub habe <span class="c-nom">ich</span> mich gut erholt.', exEn: "On holiday I recovered well." },
  { id: "c1232", de: "die Versicherung", en: "the insurance", level: "B1", theme: "Gesundheit",
    ex: '<span class="c-nom">Die Versicherung</span> zahlt <span class="c-akk">die Behandlung</span>.', exEn: "The insurance pays for the treatment." },
  { id: "c1233", de: "der Stress", en: "the stress", level: "B1", theme: "Gesundheit",
    ex: '<span class="c-nom">Der Stress</span> bei <span class="c-dat">der Arbeit</span> macht <span class="c-akk">mich</span> krank.', exEn: "The stress at work makes me ill." },
  { id: "c1234", de: "sich ärgern", en: "to get annoyed (über = about)", level: "B1", theme: "Gesundheit",
    ex: '<span class="c-nom">Er</span> ärgert sich über <span class="c-akk">den Lärm</span>.', exEn: "He gets annoyed about the noise." },

  /* ---------------------- Medien & Digitales ---------------------- */
  { id: "c1240", de: "das Gerät", en: "the device", level: "B1", theme: "Medien",
    ex: '<span class="c-nom">Dieses Gerät</span> verbraucht <span class="c-akk">wenig Strom</span>.', exEn: "This device uses little power." },
  { id: "c1241", de: "der Datenschutz", en: "the data protection", level: "B1", theme: "Medien",
    ex: '<span class="c-nom">Der Datenschutz</span> ist <span class="c-dat">vielen Menschen</span> wichtig.', exEn: "Data protection is important to many people." },
  { id: "c1242", de: "die Werbung", en: "the advertising", level: "B1", theme: "Medien",
    ex: '<span class="c-nom">Ich</span> finde <span class="c-akk">die Werbung</span> im Internet nervig.', exEn: "I find online advertising annoying." },
  { id: "c1243", de: "das Passwort", en: "the password", level: "B1", theme: "Medien",
    ex: '<span class="c-nom">Du</span> solltest <span class="c-akk">dein Passwort</span> regelmäßig ändern.', exEn: "You should change your password regularly." },

  /* ---------------------- Gesellschaft & Politik ---------------------- */
  { id: "c1250", de: "die Gesellschaft", en: "the society", level: "B1", theme: "Gesellschaft",
    ex: 'In <span class="c-dat">unserer Gesellschaft</span> ändert sich <span class="c-nom">vieles</span>.', exEn: "In our society much is changing." },
  { id: "c1251", de: "die Regierung", en: "the government", level: "B1", theme: "Gesellschaft",
    ex: '<span class="c-nom">Die Regierung</span> hat <span class="c-akk">ein neues Gesetz</span> beschlossen.', exEn: "The government passed a new law." },
  { id: "c1252", de: "die Wahl", en: "the election / choice", level: "B1", theme: "Gesellschaft",
    ex: '<span class="c-nom">Die Bürger</span> gehen zur <span class="c-dat">Wahl</span>.', exEn: "The citizens go to vote." },
  { id: "c1253", de: "die Steuer", en: "the tax", level: "B1", theme: "Gesellschaft",
    ex: '<span class="c-nom">Jeder</span> muss <span class="c-akk">Steuern</span> zahlen.', exEn: "Everyone has to pay taxes." },

  /* ---------------------- Gefühle & Persönlichkeit ---------------------- */
  { id: "c1260", de: "sich freuen auf", en: "to look forward to (+ Akk)", level: "B1", theme: "Gefühle",
    ex: '<span class="c-nom">Ich</span> freue mich auf <span class="c-akk">das Wochenende</span>.', exEn: "I'm looking forward to the weekend." },
  { id: "c1261", de: "die Beziehung", en: "the relationship", level: "B1", theme: "Gefühle",
    ex: '<span class="c-nom">Eine gute Beziehung</span> braucht <span class="c-akk">Vertrauen</span>.', exEn: "A good relationship needs trust." },
  { id: "c1262", de: "die Geduld", en: "the patience", level: "B1", theme: "Gefühle",
    ex: 'Mit <span class="c-dat">Kindern</span> braucht <span class="c-nom">man</span> <span class="c-akk">viel Geduld</span>.', exEn: "With children you need a lot of patience." },
  { id: "c1263", de: "die Enttäuschung", en: "the disappointment", level: "B1", theme: "Gefühle",
    ex: '<span class="c-nom">Die Niederlage</span> war <span class="c-dat">uns</span> eine große Enttäuschung.', exEn: "The defeat was a great disappointment to us." },

  /* ---------------------- Abstrakt & Konnektoren B1 ---------------------- */
  { id: "c1270", de: "der Vorteil", en: "the advantage", level: "B1", theme: "Abstrakt",
    ex: '<span class="c-nom">Das hat</span> für <span class="c-akk">mich</span> <span class="c-akk">viele Vorteile</span>.', exEn: "That has many advantages for me." },
  { id: "c1271", de: "der Nachteil", en: "the disadvantage", level: "B1", theme: "Abstrakt",
    ex: '<span class="c-nom">Der größte Nachteil</span> ist <span class="c-nom">der Preis</span>.', exEn: "The biggest disadvantage is the price." },
  { id: "c1272", de: "der Unterschied", en: "the difference", level: "B1", theme: "Abstrakt",
    ex: '<span class="c-nom">Es</span> gibt <span class="c-akk">einen großen Unterschied</span> zwischen <span class="c-dat">beiden</span>.', exEn: "There's a big difference between the two." },
  { id: "c1273", de: "die Zukunft", en: "the future", level: "B1", theme: "Abstrakt",
    ex: 'In <span class="c-dat">der Zukunft</span> möchte <span class="c-nom">ich</span> im Ausland leben.', exEn: "In the future I'd like to live abroad." },
  { id: "c1274", de: "einerseits … andererseits", en: "on one hand … on the other", level: "B1", theme: "Verbinden",
    ex: 'Einerseits ist <span class="c-nom">es</span> teuer, andererseits ist <span class="c-nom">es</span> praktisch.', exEn: "On one hand it's expensive, on the other it's practical." },
  { id: "c1275", de: "deswegen", en: "for that reason (verb 2nd)", level: "B1", theme: "Verbinden",
    ex: '<span class="c-nom">Ich</span> war krank, deswegen blieb <span class="c-nom">ich</span> zu Hause.', exEn: "I was sick, that's why I stayed home." },
  { id: "c1276", de: "je … desto", en: "the … the (more)", level: "B1", theme: "Verbinden",
    ex: 'Je mehr <span class="c-nom">ich</span> übe, desto besser werde <span class="c-nom">ich</span>.', exEn: "The more I practise, the better I get." },

  /* ---------------------- Grammatik B1 (Passiv, Relativ, Konjunktiv II) ---------------------- */
  { id: "c1280", de: "Passiv (wird … + Partizip)", en: "passive: is being done", level: "B1", theme: "Grammatik",
    ex: '<span class="c-nom">Das Haus</span> wird gerade renoviert.', exEn: "The house is being renovated right now." },
  { id: "c1281", de: "Passiv Perfekt", en: "passive perfect: has been done", level: "B1", theme: "Grammatik",
    ex: '<span class="c-nom">Der Brief</span> ist schon geschrieben worden.', exEn: "The letter has already been written." },
  { id: "c1282", de: "Relativsatz (der/die/das)", en: "relative clause", level: "B1", theme: "Grammatik",
    ex: '<span class="c-nom">Das ist der Mann</span>, <span class="c-nom">der</span> nebenan wohnt.', exEn: "That's the man who lives next door." },
  { id: "c1283", de: "Relativsatz (Dativ: dem)", en: "relative clause in Dativ", level: "B1", theme: "Grammatik",
    ex: '<span class="c-nom">Die Frau</span>, <span class="c-dat">der</span> ich helfe, ist <span class="c-nom">meine Nachbarin</span>.', exEn: "The woman I'm helping is my neighbour." },
  { id: "c1284", de: "würde + Infinitiv", en: "would (Konjunktiv II)", level: "B1", theme: "Grammatik",
    ex: 'An <span class="c-dat">deiner Stelle</span> würde <span class="c-nom">ich</span> <span class="c-akk">den Arzt</span> fragen.', exEn: "In your place I would ask the doctor." },
  { id: "c1285", de: "hätte / wäre", en: "would have / would be", level: "B1", theme: "Grammatik",
    ex: 'Wenn <span class="c-nom">ich</span> Zeit hätte, käme <span class="c-nom">ich</span> mit.', exEn: "If I had time, I'd come along." },
  { id: "c1286", de: "um … zu", en: "in order to", level: "B1", theme: "Grammatik",
    ex: '<span class="c-nom">Ich</span> lerne Deutsch, um <span class="c-akk">eine Arbeit</span> zu finden.', exEn: "I learn German in order to find a job." },
  { id: "c1287", de: "damit", en: "so that (new subject)", level: "B1", theme: "Grammatik",
    ex: '<span class="c-nom">Ich</span> spreche langsam, damit <span class="c-nom">du</span> mich verstehst.', exEn: "I speak slowly so that you understand me." }
];
