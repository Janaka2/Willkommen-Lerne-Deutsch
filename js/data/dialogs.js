/* Practice dialogues ("Dialoge") for speaking with a partner.
   Each dialog: { title, level, en, lines:[{who:"A"|"B", de, en}] }
   Themes mix real A1/A2 situations + topics from class (Linie 1).
   `level` ("A2" core, "B1" extension) lets the page filter by CEFR level. */
window.DIALOGS = [
  {
    title: "Im Handygeschäft — Reparatur",
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
    en: "Small talk about the weekend",
    lines: [
      { who: "A", de: "Wie war dein Wochenende?", en: "How was your weekend?" },
      { who: "B", de: "Sehr schön, danke. Ich habe Freunde getroffen. Und deins?", en: "Very nice, thanks. I met friends. And yours?" },
      { who: "A", de: "Ich bin zu Hause geblieben und habe ein bisschen gelernt.", en: "I stayed home and studied a bit." },
      { who: "B", de: "Fleißig! Hast du auch Pause gemacht?", en: "Diligent! Did you take a break too?" },
      { who: "A", de: "Klar. Am Sonntag bin ich spazieren gegangen.", en: "Of course. On Sunday I went for a walk." },
      { who: "B", de: "Das klingt gut. Nächstes Wochenende sollten wir uns treffen.", en: "That sounds good. Next weekend we should meet up." }
    ]
  },

  /* ===================== B1 dialogues ===================== */
  {
    title: "Vorstellungsgespräch",
    level: "B1",
    en: "Job interview (B1)",
    lines: [
      { who: "A", de: "Schön, dass Sie da sind. Erzählen Sie doch kurz etwas über sich.", en: "Nice to have you here. Could you tell us a bit about yourself?" },
      { who: "B", de: "Gern. Ich bin seit zehn Jahren Softwareentwickler und habe viel Erfahrung mit großen Projekten.", en: "Gladly. I've been a software developer for ten years and have a lot of experience with large projects." },
      { who: "A", de: "Warum haben Sie sich bei uns beworben?", en: "Why did you apply to us?" },
      { who: "B", de: "Ihre Firma ist bekannt für moderne Technik. Ich möchte mich weiterentwickeln und Verantwortung übernehmen.", en: "Your company is known for modern technology. I'd like to develop further and take on responsibility." },
      { who: "A", de: "Was sind Ihre Stärken und Schwächen?", en: "What are your strengths and weaknesses?" },
      { who: "B", de: "Ich bin sehr zuverlässig. Manchmal bin ich aber zu genau, deshalb arbeite ich daran.", en: "I'm very reliable. Sometimes, though, I'm too meticulous, so I'm working on that." },
      { who: "A", de: "Vielen Dank. Wir melden uns nächste Woche bei Ihnen.", en: "Thank you. We'll get back to you next week." }
    ]
  },
  {
    title: "Eine Beschwerde im Geschäft",
    level: "B1",
    en: "A complaint in a shop (B1)",
    lines: [
      { who: "A", de: "Guten Tag, ich möchte mich über dieses Gerät beschweren. Es funktioniert seit gestern nicht mehr.", en: "Hello, I'd like to complain about this device. It hasn't worked since yesterday." },
      { who: "B", de: "Das tut mir leid. Haben Sie noch den Kassenbon?", en: "I'm sorry about that. Do you still have the receipt?" },
      { who: "A", de: "Ja, hier ist er. Ich habe es erst letzte Woche gekauft.", en: "Yes, here it is. I only bought it last week." },
      { who: "B", de: "Dann haben Sie natürlich Garantie. Möchten Sie Ihr Geld zurück oder ein neues Gerät?", en: "Then of course you have a warranty. Would you like your money back or a new device?" },
      { who: "A", de: "Am liebsten ein neues. Wäre es möglich, es gleich umzutauschen?", en: "A new one preferably. Would it be possible to exchange it right away?" },
      { who: "B", de: "Kein Problem. Ich kümmere mich sofort darum.", en: "No problem. I'll take care of it immediately." },
      { who: "A", de: "Vielen Dank für Ihr Verständnis.", en: "Thank you for your understanding." }
    ]
  },
  {
    title: "Diskussion: Stadt oder Land?",
    level: "B1",
    en: "Discussion: city or countryside? (B1)",
    lines: [
      { who: "A", de: "Ich finde, das Leben in der Stadt hat viele Vorteile. Man hat alles in der Nähe.", en: "I think city life has many advantages. You have everything nearby." },
      { who: "B", de: "Das stimmt, aber der Nachteil ist, dass alles teurer und lauter ist.", en: "That's true, but the disadvantage is that everything is more expensive and noisier." },
      { who: "A", de: "Einerseits ja, andererseits gibt es auf dem Land kaum gute Jobs.", en: "On one hand yes, on the other hand there are hardly any good jobs in the countryside." },
      { who: "B", de: "Da hast du recht. Trotzdem würde ich lieber im Grünen wohnen, weil die Luft besser ist.", en: "You're right there. Still, I'd rather live in the countryside because the air is better." },
      { who: "A", de: "Je älter ich werde, desto mehr verstehe ich das.", en: "The older I get, the more I understand that." },
      { who: "B", de: "Vielleicht ist ein kleiner Ort in der Nähe der Stadt der beste Kompromiss.", en: "Maybe a small town near the city is the best compromise." }
    ]
  },
  {
    title: "Bei der Wohnungsbesichtigung",
    level: "B1",
    en: "At the apartment viewing (B1)",
    lines: [
      { who: "A", de: "Guten Tag, ich interessiere mich für die Wohnung, die Sie inseriert haben.", en: "Hello, I'm interested in the apartment that you advertised." },
      { who: "B", de: "Schön. Die Wohnung wird gerade renoviert, aber sie ist ab nächstem Monat frei.", en: "Great. The apartment is currently being renovated, but it's available from next month." },
      { who: "A", de: "Wie hoch ist die Miete und sind die Nebenkosten schon enthalten?", en: "How high is the rent, and are the utilities already included?" },
      { who: "B", de: "Die Miete beträgt 1200 Franken. Die Nebenkosten kommen noch dazu.", en: "The rent is 1200 francs. The utilities are extra." },
      { who: "A", de: "Wäre es möglich, einen Haustier zu halten? Ich habe eine Katze.", en: "Would it be possible to keep a pet? I have a cat." },
      { who: "B", de: "Das müsste ich mit dem Eigentümer besprechen. Ich melde mich, sobald ich Bescheid weiß.", en: "I'd have to discuss that with the owner. I'll get back to you as soon as I know." },
      { who: "A", de: "Vielen Dank. Ich würde mich sehr über eine Zusage freuen.", en: "Thank you. I'd be very happy about an acceptance." }
    ]
  }
];
