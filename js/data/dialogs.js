/* Practice dialogues ("Dialoge") for speaking with a partner.
   Each dialog: { title, en, lines:[{who:"A"|"B", de, en}] }
   Themes mix real A1/A2 situations + topics from class (Linie 1). */
window.DIALOGS = [
  {
    title: "Im Handygeschäft — Reparatur",
    en: "At the phone shop — repair",
    lines: [
      { who: "A", de: "Guten Tag, mein Handy ist kaputt. Das Display ist gebrochen.", en: "Hello, my phone is broken. The display is cracked." },
      { who: "B", de: "Oh je. Soll ich es reparieren oder kaufen Sie lieber ein neues?", en: "Oh dear. Shall I repair it, or would you rather buy a new one?" },
      { who: "A", de: "Was ist besser? Lohnt sich die Reparatur?", en: "What's better? Is the repair worth it?" },
      { who: "B", de: "Bei diesem Modell nicht. Da kaufen Sie besser ein neues Handy.", en: "Not with this model. You'd be better off buying a new phone." },
      { who: "A", de: "Gut. Nehme ich am besten ein Handy mit Vertrag?", en: "Okay. Should I take a phone with a contract?" },
      { who: "B", de: "Ja, aber passen Sie auf, dass Sie den Vertrag auch wieder kündigen können.", en: "Yes, but make sure you can also cancel the contract again." },
      { who: "A", de: "Danke für den Tipp! Ich überlege es mir.", en: "Thanks for the tip! I'll think about it." }
    ]
  },
  {
    title: "Computer-Problem — Elektrobastler",
    en: "Computer problem — the tinkerers",
    lines: [
      { who: "A", de: "Mein Drucker funktioniert nicht. Was soll ich machen?", en: "My printer isn't working. What should I do?" },
      { who: "B", de: "Schalte den Drucker aus und schalte ihn wieder ein.", en: "Switch the printer off and on again." },
      { who: "A", de: "Das habe ich schon probiert. Es geht immer noch nicht.", en: "I already tried that. It still doesn't work." },
      { who: "B", de: "Dann musst du zuerst den Anschluss prüfen. Ist das Kabel in Ordnung?", en: "Then you must check the connection first. Is the cable okay?" },
      { who: "A", de: "Ah, das Kabel war locker! Jetzt geht es. Vielen Dank!", en: "Ah, the cable was loose! Now it works. Thanks a lot!" },
      { who: "B", de: "Gern. Und speichere deine Fotos immer auch auf einem USB-Stick.", en: "You're welcome. And always save your photos on a USB stick too." }
    ]
  },
  {
    title: "Neue Leute kennenlernen",
    en: "Getting to know new people",
    lines: [
      { who: "A", de: "Hallo, ich glaube, wir kennen uns noch nicht. Ich heiße Janaka.", en: "Hi, I think we haven't met yet. My name is Janaka." },
      { who: "B", de: "Freut mich! Ich bin Anna. Woher kommst du?", en: "Nice to meet you! I'm Anna. Where are you from?" },
      { who: "A", de: "Ich komme aus Sri Lanka, aber ich wohne jetzt in der Schweiz.", en: "I'm from Sri Lanka, but I live in Switzerland now." },
      { who: "B", de: "Interessant! Und was machst du beruflich?", en: "Interesting! And what do you do for work?" },
      { who: "A", de: "Ich arbeite als Softwareentwickler. Und du?", en: "I work as a software developer. And you?" },
      { who: "B", de: "Ich bin Lehrerin. Wollen wir mal einen Kaffee trinken?", en: "I'm a teacher. Shall we grab a coffee sometime?" },
      { who: "A", de: "Sehr gern. Hier ist meine Nummer.", en: "I'd love to. Here's my number." }
    ]
  },
  {
    title: "Beim Arzt — einen Termin machen",
    en: "At the doctor — making an appointment",
    lines: [
      { who: "A", de: "Praxis Dr. Weber, guten Morgen.", en: "Dr. Weber's practice, good morning." },
      { who: "B", de: "Guten Morgen. Ich hätte gern einen Termin. Ich habe seit drei Tagen Kopfschmerzen.", en: "Good morning. I'd like an appointment. I've had a headache for three days." },
      { who: "A", de: "Können Sie morgen um 10 Uhr kommen?", en: "Can you come tomorrow at 10?" },
      { who: "B", de: "Ja, das passt mir gut. Was muss ich mitbringen?", en: "Yes, that suits me well. What do I need to bring?" },
      { who: "A", de: "Bitte bringen Sie Ihre Versichertenkarte mit.", en: "Please bring your insurance card." },
      { who: "B", de: "Mache ich. Vielen Dank und bis morgen!", en: "I will. Thank you and see you tomorrow!" }
    ]
  },
  {
    title: "Einkaufen im Supermarkt",
    en: "Shopping at the supermarket",
    lines: [
      { who: "A", de: "Entschuldigung, wo finde ich die Milch?", en: "Excuse me, where do I find the milk?" },
      { who: "B", de: "Die Milch ist hinten links, neben dem Käse.", en: "The milk is at the back on the left, next to the cheese." },
      { who: "A", de: "Danke. Und haben Sie auch frisches Brot?", en: "Thanks. And do you have fresh bread too?" },
      { who: "B", de: "Ja, das Brot ist gleich am Eingang.", en: "Yes, the bread is right by the entrance." },
      { who: "A", de: "Super. Was kostet ein Kilo Äpfel?", en: "Great. How much is a kilo of apples?" },
      { who: "B", de: "Zwei Euro fünfzig. Sie sind heute im Angebot.", en: "Two euros fifty. They're on offer today." }
    ]
  },
  {
    title: "Im Restaurant bestellen",
    en: "Ordering in a restaurant",
    lines: [
      { who: "A", de: "Guten Abend. Möchten Sie schon bestellen?", en: "Good evening. Would you like to order already?" },
      { who: "B", de: "Ja, ich hätte gern die Suppe und ein Wasser, bitte.", en: "Yes, I'd like the soup and a water, please." },
      { who: "A", de: "Gern. Und als Hauptgericht?", en: "Sure. And for the main course?" },
      { who: "B", de: "Was können Sie empfehlen?", en: "What can you recommend?" },
      { who: "A", de: "Der Fisch ist heute sehr frisch.", en: "The fish is very fresh today." },
      { who: "B", de: "Dann nehme ich den Fisch. Vielen Dank.", en: "Then I'll take the fish. Thank you." }
    ]
  },
  {
    title: "Nach dem Weg fragen",
    en: "Asking for directions",
    lines: [
      { who: "A", de: "Entschuldigung, wie komme ich zum Bahnhof?", en: "Excuse me, how do I get to the train station?" },
      { who: "B", de: "Gehen Sie hier geradeaus und dann die zweite Straße links.", en: "Go straight ahead here and then take the second street on the left." },
      { who: "A", de: "Ist es weit?", en: "Is it far?" },
      { who: "B", de: "Nein, nur fünf Minuten zu Fuß.", en: "No, just five minutes on foot." },
      { who: "A", de: "Vielen Dank für Ihre Hilfe!", en: "Thank you very much for your help!" },
      { who: "B", de: "Gern geschehen. Schönen Tag noch!", en: "You're welcome. Have a nice day!" }
    ]
  },
  {
    title: "Über Pläne sprechen (Zukunft)",
    en: "Talking about plans (future)",
    lines: [
      { who: "A", de: "Was machst du nächstes Jahr?", en: "What are you doing next year?" },
      { who: "B", de: "Ich werde eine neue Stelle suchen. Und du?", en: "I'm going to look for a new job. And you?" },
      { who: "A", de: "Ich werde mein Deutsch verbessern und die A2-Prüfung machen.", en: "I'll improve my German and take the A2 exam." },
      { who: "B", de: "Toll! Was wolltest du früher werden?", en: "Great! What did you want to become earlier on?" },
      { who: "A", de: "Als Kind wollte ich Pilot werden, aber ich wurde Ingenieur.", en: "As a child I wanted to be a pilot, but I became an engineer." },
      { who: "B", de: "Und eines Tages wirst du vielleicht dein eigenes Geschäft haben.", en: "And one day you might have your own business." },
      { who: "A", de: "Das hoffe ich! Schritt für Schritt.", en: "I hope so! Step by step." }
    ]
  },
  {
    title: "Small Talk über das Wochenende",
    en: "Small talk about the weekend",
    lines: [
      { who: "A", de: "Wie war dein Wochenende?", en: "How was your weekend?" },
      { who: "B", de: "Sehr schön, danke. Ich habe Freunde getroffen. Und deins?", en: "Very nice, thanks. I met friends. And yours?" },
      { who: "A", de: "Ich bin zu Hause geblieben und habe ein bisschen gelernt.", en: "I stayed home and studied a bit." },
      { who: "B", de: "Fleißig! Hast du auch Pause gemacht?", en: "Diligent! Did you take a break too?" },
      { who: "A", de: "Klar. Am Sonntag bin ich spazieren gegangen.", en: "Of course. On Sunday I went for a walk." },
      { who: "B", de: "Das klingt gut. Nächstes Wochenende sollten wir uns treffen.", en: "That sounds good. Next weekend we should meet up." }
    ]
  }
];
