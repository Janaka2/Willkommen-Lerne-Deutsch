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
  "Nachricht",
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
  "kennenlernen", "einladen", "gratulieren"
]);

window.nounLevel = function (de) { return window.A2_NOUNS.has(de) ? "A2" : "A1"; };
window.verbLevel = function (inf) { return window.A2_VERBS.has(inf) ? "A2" : "A1"; };
