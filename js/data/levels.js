/* CEFR level guide for vocabulary.
   Rule used here: everything is A1 (the everyday core) UNLESS it is listed
   below as A2 (more advanced, abstract, work/admin, or grammar-heavier words).
   This is a practical study guide, not an official exam list — adjust freely. */

window.A2_NOUNS = new Set([
  // People & Family
  "Nachbar", "Paar",
  // Body & Health
  "Gesundheit", "Krankheit", "Schmerz", "Medikament", "Apotheke", "Termin",
  // Home & Furniture
  "Boden", "Regal", "Spiegel", "Treppe", "Miete",
  // Food & Drink
  "Rechnung",
  // City & Places
  "Bibliothek",
  // Work & Money
  "Firma", "Chef", "Kollege", "Kollegin", "Lohn", "Kunde", "Besprechung",
  "Projekt", "Bewerbung", "Lebenslauf", "Büro",
  // School & Study
  "Prüfung", "Fehler", "Beispiel",
  // Time & Calendar
  "Datum",
  // Nature & Weather
  "Himmel", "Wolke", "Wind", "Wald", "Berg", "See", "Meer", "Fluss", "Vogel",
  // Travel & Transport
  "Bahn", "Haltestelle", "Koffer", "Ausweis", "Pass",
  // Technology & Media
  "Nachricht", "Display", "Reparatur", "Modell", "Anschluss", "Druckerpatrone",
  "USB-Stick", "Papierkorb",
  // Work & Money
  "Vertrag",
  // Everyday Objects
  "Schere",
  // Abstract & Useful
  "Idee", "Lösung", "Grund", "Meinung", "Wunsch", "Plan", "Angst",
  "Möglichkeit", "Geschichte", "Information", "Erfahrung", "Entscheidung", "Gespräch"
]);

window.A2_VERBS = new Set([
  // core / essential
  "werden", "lassen", "halten",
  // communication
  "erzählen", "erklären", "bedeuten", "wiederholen",
  // thinking / feeling
  "meinen", "hoffen", "fühlen", "vergessen", "erinnern", "entscheiden",
  // daily routine
  "aufräumen", "putzen",
  // movement
  "ankommen", "abfahren", "einsteigen", "aussteigen", "umsteigen", "mitkommen",
  "wandern", "fallen", "tragen", "ziehen", "umziehen",
  // work / study / activities
  "studieren", "üben", "lehren", "beenden", "versuchen", "schaffen",
  "gefallen", "gehören", "passen", "fehlen",
  // free time
  "besuchen", "feiern", "malen", "fotografieren",
  // reflexive
  "sich freuen", "sich interessieren", "sich treffen", "sich fühlen",
  "sich setzen", "sich anziehen", "sich entscheiden",
  // other useful
  "schließen", "mitbringen", "vorbereiten", "benutzen", "bekommen",
  "verlieren", "gewinnen", "wechseln", "ändern", "bauen", "reparieren",
  "scheinen", "passieren", "legen", "stellen", "setzen",
  // extra additions
  "kennenlernen", "einladen", "gratulieren",
  // from class: Technik & Reparatur
  "kündigen", "sich lohnen", "prüfen", "speichern", "funktionieren",
  "überlegen", "zuordnen", "ankreuzen", "empfehlen"
]);

/* ----- B1: a third step beyond A2 (work, society, environment, abstract). ----- */
window.B1_NOUNS = new Set([
  // Arbeit & Beruf
  "Arbeitgeber", "Arbeitnehmer", "Gehalt", "Stelle", "Vorstellungsgespräch", "Abteilung",
  "Erfolg", "Verantwortung", "Überstunde", "Praktikum", "Karriere", "Kündigung", "Gewerkschaft",
  // Bildung
  "Bildung", "Ausbildung", "Studium", "Universität", "Wissen", "Kenntnis", "Fortschritt",
  "Zeugnis", "Vorlesung", "Forschung",
  // Umwelt & Natur
  "Umwelt", "Umweltschutz", "Klimawandel", "Natur", "Energie", "Müll", "Verschmutzung", "Recycling",
  // Gesundheit & Ernährung
  "Ernährung", "Behandlung", "Krankenkasse", "Versicherung", "Stress", "Bewegung", "Verletzung", "Operation",
  // Medien & Digitales
  "Medium", "Werbung", "Datenschutz", "Bildschirm", "Anwendung", "Gerät", "Sendung",
  "Suchmaschine", "Benutzer", "Passwort",
  // Gesellschaft & Politik
  "Gesellschaft", "Regierung", "Politik", "Gesetz", "Wahl", "Bürger", "Steuer", "Demokratie",
  "Gleichberechtigung", "Flüchtling",
  // Gefühle & Persönlichkeit
  "Gefühl", "Geduld", "Charakter", "Eigenschaft", "Verhalten", "Beziehung", "Vertrauen",
  "Enttäuschung", "Stimmung", "Selbstbewusstsein",
  // Abstrakt & nützlich
  "Zukunft", "Entwicklung", "Veränderung", "Unterschied", "Vorteil", "Nachteil", "Bedeutung",
  "Zusammenhang", "Voraussetzung", "Folge", "Ziel", "Vorschlag", "Beschwerde", "Verspätung", "Wirkung"
]);

window.B1_VERBS = new Set([
  // reflexive (often + fixed preposition)
  "sich beschweren", "sich entschuldigen", "sich bedanken", "sich bewerben", "sich erkundigen",
  "sich unterhalten", "sich konzentrieren", "sich erholen", "sich verlieben", "sich gewöhnen",
  "sich kümmern", "sich beeilen", "sich ärgern", "sich vorstellen",
  // communication & opinion
  "diskutieren", "behaupten", "beschreiben", "erwähnen", "überzeugen", "mitteilen", "vorschlagen",
  "ausdrücken", "begründen", "bemerken",
  // with a fixed preposition
  "teilnehmen", "achten", "verzichten", "sorgen", "abhängen", "bestehen", "nachdenken",
  // abstract / inseparable prefixes
  "erreichen", "erlauben", "verbieten", "verbringen", "vermeiden", "verbessern", "verändern",
  "entwickeln", "entstehen", "erkennen", "unterstützen", "unternehmen", "übernehmen",
  "vergleichen", "gelingen",
  // more separable verbs
  "zunehmen", "abnehmen", "stattfinden", "aufgeben", "ausgeben", "zurückkehren"
]);

/* Precedence: B1 first, then A2, else A1 — so a word can't fall into two buckets. */
window.nounLevel = function (de) {
  return window.B1_NOUNS.has(de) ? "B1" : window.A2_NOUNS.has(de) ? "A2" : "A1";
};
window.verbLevel = function (inf) {
  return window.B1_VERBS.has(inf) ? "B1" : window.A2_VERBS.has(inf) ? "A2" : "A1";
};
