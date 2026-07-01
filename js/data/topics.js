/* =========================================================================
   THEMEN-GESPRÄCHE — window.TOPICS
   Short, level-appropriate texts on topics an adult professional in Zug,
   Switzerland actually cares about — used for comprehensible INPUT (read/listen,
   tap unknown words) and produce-first OUTPUT (talk about your own version).

   Coverage spans everyday life (commute, family, shopping, doctor, restaurant,
   cooking, friends, money, weather) AND the learner's inner life — philosophy,
   Buddhism, ethics, the five precepts, merit, rebirth, hard work, honesty,
   happiness and helping others. Self-relevant topics stay in memory.

   THE SCIENCE: input works best when ~95–98% of the words are already known
   (the "i+1" level); output then forces you to notice the gaps. Self-relevant,
   low-stress topics stay in memory and keep motivation high.

   Shape:  { id, title, level, text[], en[], glossary[], prompts[] }
     id        stable slug
     title     German topic title (shown on the picker card)
     level     "A2" | "B1"
     text      array of SHORT German sentences. One array item = one sentence,
               so audio and the English toggle work per sentence.
     en        English translations, SENTENCE-ALIGNED with `text` (same length).
     glossary  [{ de, en }] — the content words most likely to be new, with a
               plain-English gloss. Feeds the tap-a-word popover (topic-specific
               meanings win over the generic noun/verb lookup).
     prompts   [{ de_cue, en_cue, model_de }] — 2–3 output tasks. The learner
               answers about THEIR OWN life first, then reveals `model_de`.

   Texts stay high-frequency so most words overlap the deck + FREQ list, which
   is what makes the "% bekannt" meter land near the comprehensible range.

   OFFLINE-FIRST: bundled local data, committed, never fetched.
   ========================================================================= */
window.TOPICS = [
  {
    id: "arbeitstag-tech",
    title: "Mein Arbeitstag in der IT",
    level: "B1",
    text: [
      "Ich arbeite als Software-Entwickler bei einer Bank.",
      "Am Morgen lese ich zuerst meine E-Mails und trinke einen Kaffee.",
      "Um neun Uhr haben wir ein kurzes Meeting im Team.",
      "Danach schreibe ich Code und löse Probleme im System.",
      "Am Nachmittag teste ich das Programm und spreche mit Kollegen.",
      "Wenn ein Fehler kommt, bleibe ich ruhig und suche die Ursache.",
      "Die Arbeit ist manchmal schwer, aber sie macht mir Spaß.",
      "Am Ende des Tages bin ich zufrieden, wenn alles funktioniert."
    ],
    en: [
      "I work as a software developer at a bank.",
      "In the morning I first read my emails and drink a coffee.",
      "At nine o'clock we have a short team meeting.",
      "After that I write code and solve problems in the system.",
      "In the afternoon I test the program and talk with colleagues.",
      "When a bug comes up, I stay calm and look for the cause.",
      "The work is sometimes hard, but I enjoy it.",
      "At the end of the day I'm satisfied when everything works."
    ],
    glossary: [
      { de: "der Software-Entwickler", en: "software developer" },
      { de: "die Bank", en: "bank" },
      { de: "das Meeting", en: "meeting" },
      { de: "der Code", en: "code" },
      { de: "das Problem", en: "problem" },
      { de: "das System", en: "system" },
      { de: "testen", en: "to test" },
      { de: "der Kollege", en: "colleague" },
      { de: "die Ursache", en: "cause" },
      { de: "funktionieren", en: "to work / function" },
      { de: "Spaß machen", en: "to be fun / to enjoy" }
    ],
    prompts: [
      { de_cue: "Erzähl von deinem Arbeitstag.", en_cue: "Tell me about your workday.", model_de: "Ich arbeite als … und am Morgen lese ich zuerst meine E-Mails." },
      { de_cue: "Was magst du an deiner Arbeit?", en_cue: "What do you like about your job?", model_de: "Ich löse gern Probleme und arbeite gern im Team." },
      { de_cue: "Was ist manchmal schwer?", en_cue: "What is sometimes hard?", model_de: "Manchmal ist der Code schwer und ich brauche viel Zeit." }
    ]
  },
  {
    id: "pendeln",
    title: "Der Weg zur Arbeit",
    level: "A2",
    text: [
      "Ich wohne in Zug und arbeite in der Stadt.",
      "Jeden Morgen fahre ich mit dem Zug zur Arbeit.",
      "Der Bahnhof ist nur zehn Minuten von meiner Wohnung.",
      "Der Zug ist fast immer pünktlich.",
      "Im Zug lese ich ein Buch oder höre Musik.",
      "Manchmal ist der Zug voll und ich muss stehen.",
      "Trotzdem mag ich diese ruhige Zeit für mich.",
      "Am Abend fahre ich müde, aber zufrieden nach Hause."
    ],
    en: [
      "I live in Zug and work in the city.",
      "Every morning I take the train to work.",
      "The station is only ten minutes from my flat.",
      "The train is almost always on time.",
      "On the train I read a book or listen to music.",
      "Sometimes the train is full and I have to stand.",
      "Still, I like this quiet time for myself.",
      "In the evening I go home tired but content."
    ],
    glossary: [
      { de: "pendeln", en: "to commute" },
      { de: "der Bahnhof", en: "train station" },
      { de: "pünktlich", en: "on time / punctual" },
      { de: "die Wohnung", en: "flat / apartment" },
      { de: "voll", en: "full" },
      { de: "trotzdem", en: "still / nevertheless" },
      { de: "zufrieden", en: "content / satisfied" },
      { de: "müde", en: "tired" }
    ],
    prompts: [
      { de_cue: "Wie kommst du zur Arbeit?", en_cue: "How do you get to work?", model_de: "Ich fahre mit dem Zug zur Arbeit. Der Bahnhof ist nah." },
      { de_cue: "Was machst du unterwegs?", en_cue: "What do you do on the way?", model_de: "Unterwegs lese ich ein Buch oder höre Musik." }
    ]
  },
  {
    id: "familie",
    title: "Meine Familie",
    level: "A2",
    text: [
      "Ich habe eine kleine Familie.",
      "Meine Frau arbeitet als Lehrerin.",
      "Wir haben zwei Kinder, einen Sohn und eine Tochter.",
      "Die Kinder gehen zusammen zur Schule.",
      "Am Abend essen wir zusammen und sprechen über den Tag.",
      "Meine Kinder erzählen gern, was sie in der Schule gelernt haben.",
      "Am Wochenende spielen wir im Park oder besuchen die Großeltern.",
      "Für mich ist die Familie das Wichtigste im Leben."
    ],
    en: [
      "I have a small family.",
      "My wife works as a teacher.",
      "We have two children, a son and a daughter.",
      "The children go to school together.",
      "In the evening we eat together and talk about the day.",
      "My children like to tell me what they learned at school.",
      "On the weekend we play in the park or visit the grandparents.",
      "For me, family is the most important thing in life."
    ],
    glossary: [
      { de: "die Lehrerin", en: "teacher (female)" },
      { de: "der Sohn", en: "son" },
      { de: "die Tochter", en: "daughter" },
      { de: "die Schule", en: "school" },
      { de: "erzählen", en: "to tell" },
      { de: "die Großeltern", en: "grandparents" },
      { de: "besuchen", en: "to visit" }
    ],
    prompts: [
      { de_cue: "Erzähl von deiner Familie.", en_cue: "Tell me about your family.", model_de: "Ich habe eine kleine Familie mit zwei Kindern." },
      { de_cue: "Was macht ihr am Wochenende?", en_cue: "What do you do on the weekend?", model_de: "Am Wochenende spielen wir im Park oder besuchen die Großeltern." }
    ]
  },
  {
    id: "wochenende-schweiz",
    title: "Ein Wochenende in der Schweiz",
    level: "B1",
    text: [
      "Am Samstag machen wir oft einen Ausflug in die Berge.",
      "Wir nehmen den Zug und dann eine Seilbahn nach oben.",
      "Oben ist die Luft frisch und die Aussicht ist wunderschön.",
      "Wir wandern ein paar Stunden und machen ein Picknick.",
      "Manchmal treffen wir Freunde und grillen zusammen.",
      "Am Sonntag bleiben wir zu Hause und ruhen uns aus.",
      "Die Natur in der Schweiz gibt mir viel Energie.",
      "Solche einfachen Tage machen mich sehr glücklich."
    ],
    en: [
      "On Saturday we often take a trip into the mountains.",
      "We take the train and then a cable car up.",
      "Up there the air is fresh and the view is beautiful.",
      "We hike for a few hours and have a picnic.",
      "Sometimes we meet friends and have a barbecue together.",
      "On Sunday we stay home and rest.",
      "Nature in Switzerland gives me a lot of energy.",
      "Such simple days make me very happy."
    ],
    glossary: [
      { de: "der Ausflug", en: "excursion / trip" },
      { de: "die Berge", en: "mountains" },
      { de: "die Seilbahn", en: "cable car" },
      { de: "die Aussicht", en: "view" },
      { de: "wandern", en: "to hike" },
      { de: "grillen", en: "to have a barbecue" },
      { de: "sich ausruhen", en: "to rest" },
      { de: "die Natur", en: "nature" }
    ],
    prompts: [
      { de_cue: "Was machst du am Wochenende gern?", en_cue: "What do you like doing on weekends?", model_de: "Am Wochenende mache ich gern einen Ausflug in die Berge." },
      { de_cue: "Beschreibe die Natur bei dir.", en_cue: "Describe the nature where you are.", model_de: "Die Natur hier ist schön und ruhig. Sie gibt mir Energie." }
    ]
  },
  {
    id: "reise-srilanka",
    title: "Eine Reise nach Sri Lanka planen",
    level: "B1",
    text: [
      "Nächstes Jahr möchte ich mit der Familie nach Sri Lanka reisen.",
      "Meine Eltern wohnen dort und wir besuchen sie oft.",
      "Zuerst buche ich die Flüge und plane die Route.",
      "In Sri Lanka ist das Wetter warm und das Essen ist lecker.",
      "Wir wollen den Strand, die Tempel und die Berge sehen.",
      "Am wichtigsten ist die Zeit mit der ganzen Familie.",
      "Ich freue mich schon sehr auf diese Reise.",
      "Nach dem Urlaub komme ich immer entspannt zurück."
    ],
    en: [
      "Next year I want to travel to Sri Lanka with the family.",
      "My parents live there and we visit them often.",
      "First I book the flights and plan the route.",
      "In Sri Lanka the weather is warm and the food is delicious.",
      "We want to see the beach, the temples and the mountains.",
      "Most important is the time with the whole family.",
      "I'm already really looking forward to this trip.",
      "After the holiday I always come back relaxed."
    ],
    glossary: [
      { de: "die Reise", en: "trip / journey" },
      { de: "reisen", en: "to travel" },
      { de: "der Flug", en: "flight" },
      { de: "buchen", en: "to book" },
      { de: "die Route", en: "route" },
      { de: "der Strand", en: "beach" },
      { de: "der Tempel", en: "temple" },
      { de: "der Urlaub", en: "holiday / vacation" },
      { de: "entspannt", en: "relaxed" },
      { de: "sich freuen auf", en: "to look forward to" }
    ],
    prompts: [
      { de_cue: "Wohin möchtest du reisen?", en_cue: "Where would you like to travel?", model_de: "Ich möchte nach Sri Lanka reisen und meine Eltern besuchen." },
      { de_cue: "Wie planst du eine Reise?", en_cue: "How do you plan a trip?", model_de: "Zuerst buche ich die Flüge und dann plane ich die Route." },
      { de_cue: "Worauf freust du dich?", en_cue: "What are you looking forward to?", model_de: "Ich freue mich auf den Strand und das gute Essen." }
    ]
  },
  {
    id: "achtsamkeit",
    title: "Ruhe und Achtsamkeit",
    level: "B1",
    text: [
      "Jeden Morgen sitze ich zehn Minuten ganz still.",
      "Ich atme langsam und denke nur an den Moment.",
      "Die Gedanken kommen und gehen wie Wolken.",
      "Ich muss sie nicht festhalten oder bewerten.",
      "Diese Ruhe hilft mir, den Tag klar zu beginnen.",
      "Wenn ich ruhig bin, verstehe ich mich selbst besser.",
      "Am Abend bin ich dankbar für die kleinen Dinge.",
      "Achtsamkeit ist für mich eine Art zu leben."
    ],
    en: [
      "Every morning I sit completely still for ten minutes.",
      "I breathe slowly and think only of the present moment.",
      "Thoughts come and go like clouds.",
      "I don't have to hold on to them or judge them.",
      "This calm helps me start the day clearly.",
      "When I am calm, I understand myself better.",
      "In the evening I am grateful for the small things.",
      "Mindfulness is for me a way of living."
    ],
    glossary: [
      { de: "die Achtsamkeit", en: "mindfulness" },
      { de: "still", en: "still / quiet" },
      { de: "atmen", en: "to breathe" },
      { de: "der Gedanke", en: "thought" },
      { de: "die Wolke", en: "cloud" },
      { de: "festhalten", en: "to hold on to" },
      { de: "bewerten", en: "to judge / rate" },
      { de: "die Ruhe", en: "calm / peace" },
      { de: "dankbar", en: "grateful" }
    ],
    prompts: [
      { de_cue: "Wie findest du Ruhe im Alltag?", en_cue: "How do you find calm in daily life?", model_de: "Am Morgen sitze ich still und atme langsam." },
      { de_cue: "Wofür bist du dankbar?", en_cue: "What are you grateful for?", model_de: "Ich bin dankbar für meine Familie und meine Gesundheit." }
    ]
  },
  {
    id: "deutsch-lernen",
    title: "Warum ich Deutsch lerne",
    level: "A2",
    text: [
      "Ich lerne Deutsch, weil ich in der Schweiz lebe.",
      "Jeden Tag übe ich ein bisschen mit einer App.",
      "Am Anfang war die Grammatik sehr schwer für mich.",
      "Jetzt verstehe ich schon viele Wörter und Sätze.",
      "Ich spreche langsam, aber ich mache weniger Fehler.",
      "Ich habe keine Angst mehr, Fehler zu machen.",
      "Mit der Zeit wird mein Deutsch immer besser.",
      "Jeder kleine Schritt bringt mich näher zum Ziel."
    ],
    en: [
      "I'm learning German because I live in Switzerland.",
      "Every day I practise a little with an app.",
      "At the beginning the grammar was very hard for me.",
      "Now I already understand many words and sentences.",
      "I speak slowly, but I make fewer mistakes.",
      "I'm no longer afraid of making mistakes.",
      "Over time my German gets better and better.",
      "Every small step brings me closer to the goal."
    ],
    glossary: [
      { de: "üben", en: "to practise" },
      { de: "die Grammatik", en: "grammar" },
      { de: "das Wort", en: "word" },
      { de: "der Satz", en: "sentence" },
      { de: "der Fehler", en: "mistake" },
      { de: "die Angst", en: "fear" },
      { de: "der Schritt", en: "step" },
      { de: "das Ziel", en: "goal" }
    ],
    prompts: [
      { de_cue: "Warum lernst du Deutsch?", en_cue: "Why are you learning German?", model_de: "Ich lerne Deutsch, weil ich in der Schweiz lebe und arbeite." },
      { de_cue: "Wie übst du jeden Tag?", en_cue: "How do you practise every day?", model_de: "Jeden Tag übe ich ein bisschen mit einer App." }
    ]
  },
  {
    id: "einkaufen",
    title: "Einkaufen im Supermarkt",
    level: "A2",
    text: [
      "Am Samstag gehe ich in den Supermarkt.",
      "Zuerst schreibe ich eine Liste zu Hause.",
      "Ich kaufe Brot, Milch, Obst und Gemüse.",
      "An der Kasse bezahle ich mit der Karte.",
      "Manchmal vergesse ich etwas und muss noch einmal gehen.",
      "Ich kaufe lieber frische Sachen als Fertigessen.",
      "Zu Hause räume ich alles in den Kühlschrank.",
      "So spare ich Geld und esse auch gesünder."
    ],
    en: [
      "On Saturday I go to the supermarket.",
      "First I write a list at home.",
      "I buy bread, milk, fruit and vegetables.",
      "At the checkout I pay with my card.",
      "Sometimes I forget something and have to go again.",
      "I prefer to buy fresh things rather than ready meals.",
      "At home I put everything in the fridge.",
      "That way I save money and also eat healthier."
    ],
    glossary: [
      { de: "der Supermarkt", en: "supermarket" },
      { de: "die Liste", en: "list" },
      { de: "das Obst", en: "fruit" },
      { de: "das Gemüse", en: "vegetables" },
      { de: "die Kasse", en: "checkout / till" },
      { de: "frisch", en: "fresh" },
      { de: "bezahlen", en: "to pay" },
      { de: "sparen", en: "to save" },
      { de: "der Kühlschrank", en: "fridge" }
    ],
    prompts: [
      { de_cue: "Was kaufst du oft ein?", en_cue: "What do you often buy?", model_de: "Ich kaufe oft Brot, Milch, Obst und Gemüse." },
      { de_cue: "Wie bezahlst du im Geschäft?", en_cue: "How do you pay in the shop?", model_de: "An der Kasse bezahle ich mit der Karte." }
    ]
  },
  {
    id: "gesund-bleiben",
    title: "Gesund bleiben",
    level: "A2",
    text: [
      "Ich möchte gesund bleiben und fit sein.",
      "Deshalb gehe ich dreimal pro Woche joggen.",
      "Ich esse viel Obst und trinke genug Wasser.",
      "Am Wochenende schlafe ich länger und ruhe mich aus.",
      "Zu viel Stress ist nicht gut für den Körper.",
      "Ich versuche auch, früh ins Bett zu gehen.",
      "Ein Spaziergang am Abend macht den Kopf frei.",
      "Ein gesunder Körper und ein ruhiger Geist gehören zusammen."
    ],
    en: [
      "I want to stay healthy and be fit.",
      "That's why I go jogging three times a week.",
      "I eat lots of fruit and drink enough water.",
      "On the weekend I sleep longer and rest.",
      "Too much stress is not good for the body.",
      "I also try to go to bed early.",
      "A walk in the evening clears the mind.",
      "A healthy body and a calm mind belong together."
    ],
    glossary: [
      { de: "gesund", en: "healthy" },
      { de: "fit", en: "fit" },
      { de: "joggen", en: "to jog" },
      { de: "genug", en: "enough" },
      { de: "der Stress", en: "stress" },
      { de: "der Körper", en: "body" },
      { de: "früh", en: "early" },
      { de: "der Geist", en: "mind / spirit" },
      { de: "der Spaziergang", en: "walk / stroll" }
    ],
    prompts: [
      { de_cue: "Was machst du, um gesund zu bleiben?", en_cue: "What do you do to stay healthy?", model_de: "Ich gehe joggen und esse viel Obst." },
      { de_cue: "Wie entspannst du dich?", en_cue: "How do you relax?", model_de: "Am Abend mache ich einen Spaziergang. Das macht den Kopf frei." }
    ]
  },
  {
    id: "philosophie",
    title: "Über das Leben nachdenken",
    level: "B1",
    text: [
      "Ich denke gern über das Leben nach.",
      "Warum sind wir hier, und was ist wirklich wichtig?",
      "Solche Fragen haben keine einfache Antwort.",
      "Aber das Nachdenken macht mein Leben tiefer.",
      "Ich lese Bücher von alten und neuen Denkern.",
      "Manchmal spreche ich mit Freunden über diese Themen.",
      "Philosophie hilft mir, ruhig und klar zu bleiben.",
      "Am Ende zählt, wie ich jeden Tag lebe."
    ],
    en: [
      "I like to think about life.",
      "Why are we here, and what is really important?",
      "Such questions have no simple answer.",
      "But thinking makes my life deeper.",
      "I read books by old and new thinkers.",
      "Sometimes I talk with friends about these topics.",
      "Philosophy helps me stay calm and clear.",
      "In the end, what counts is how I live each day."
    ],
    glossary: [
      { de: "nachdenken", en: "to reflect / think about" },
      { de: "die Antwort", en: "answer" },
      { de: "tief", en: "deep" },
      { de: "der Denker", en: "thinker" },
      { de: "das Thema", en: "topic" },
      { de: "die Philosophie", en: "philosophy" },
      { de: "zählen", en: "to count / matter" }
    ],
    prompts: [
      { de_cue: "Über welche Fragen denkst du nach?", en_cue: "What questions do you think about?", model_de: "Ich denke oft darüber nach, was im Leben wirklich wichtig ist." },
      { de_cue: "Warum ist dir das wichtig?", en_cue: "Why is that important to you?", model_de: "Das Nachdenken macht mein Leben ruhiger und tiefer." }
    ]
  },
  {
    id: "buddhismus",
    title: "Was mir der Buddhismus gibt",
    level: "B1",
    text: [
      "Der Buddhismus ist für mich ein Weg, nicht nur eine Religion.",
      "Buddha hat gelehrt, dass alles sich ständig verändert.",
      "Wenn ich das verstehe, hänge ich weniger an Dingen.",
      "Ich versuche, freundlich und ruhig zu sein.",
      "Jeden Tag denke ich an das Gute, das ich tun kann.",
      "Meditation hilft mir, meinen Geist zu beruhigen.",
      "Der Buddhismus gibt mir Frieden im Herzen.",
      "Ich lerne, mit weniger zufrieden zu sein."
    ],
    en: [
      "Buddhism is for me a path, not just a religion.",
      "Buddha taught that everything changes constantly.",
      "When I understand that, I cling less to things.",
      "I try to be kind and calm.",
      "Every day I think of the good I can do.",
      "Meditation helps me calm my mind.",
      "Buddhism gives me peace in my heart.",
      "I learn to be content with less."
    ],
    glossary: [
      { de: "der Weg", en: "path / way" },
      { de: "die Religion", en: "religion" },
      { de: "lehren", en: "to teach" },
      { de: "sich verändern", en: "to change" },
      { de: "hängen an", en: "to cling to" },
      { de: "freundlich", en: "kind / friendly" },
      { de: "die Meditation", en: "meditation" },
      { de: "der Frieden", en: "peace" },
      { de: "das Herz", en: "heart" }
    ],
    prompts: [
      { de_cue: "Was bedeutet dir der Buddhismus?", en_cue: "What does Buddhism mean to you?", model_de: "Der Buddhismus ist für mich ein Weg zu innerem Frieden." },
      { de_cue: "Was möchtest du jeden Tag üben?", en_cue: "What do you want to practise every day?", model_de: "Ich möchte freundlich sein und weniger an Dingen hängen." }
    ]
  },
  {
    id: "leben-nach-tod",
    title: "Leben nach dem Tod",
    level: "B1",
    text: [
      "Ich glaube, dass der Tod nicht das Ende ist.",
      "Was wir tun, hat Folgen für die Zukunft.",
      "Gute Taten bringen gutes Karma.",
      "Schlechte Taten bringen Leid.",
      "Deshalb versuche ich, jeden Tag Gutes zu tun.",
      "Ich habe keine Angst vor dem Tod.",
      "Der Tod gehört zum Leben wie die Nacht zum Tag.",
      "Wichtig ist, mit einem guten Herzen zu leben."
    ],
    en: [
      "I believe that death is not the end.",
      "What we do has consequences for the future.",
      "Good deeds bring good karma.",
      "Bad deeds bring suffering.",
      "That's why I try to do good every day.",
      "I am not afraid of death.",
      "Death belongs to life like night belongs to day.",
      "What matters is to live with a good heart."
    ],
    glossary: [
      { de: "der Tod", en: "death" },
      { de: "das Ende", en: "end" },
      { de: "die Folge", en: "consequence" },
      { de: "die Tat", en: "deed / act" },
      { de: "das Karma", en: "karma" },
      { de: "das Leid", en: "suffering" },
      { de: "die Zukunft", en: "future" },
      { de: "das Herz", en: "heart" }
    ],
    prompts: [
      { de_cue: "Was denkst du über den Tod?", en_cue: "What do you think about death?", model_de: "Ich glaube, der Tod ist nicht das Ende, sondern ein Übergang." },
      { de_cue: "Wie möchtest du leben?", en_cue: "How do you want to live?", model_de: "Ich möchte jeden Tag Gutes tun und mit einem guten Herzen leben." }
    ]
  },
  {
    id: "gutes-tun",
    title: "Gutes tun und Verdienste sammeln",
    level: "B1",
    text: [
      "Ich glaube, dass gute Taten wichtig sind.",
      "Jeden Tag versuche ich, jemandem zu helfen.",
      "Manchmal ist es nur ein freundliches Wort.",
      "Manchmal gebe ich Geld für Menschen in Not.",
      "Solche Taten nennt man im Buddhismus Verdienste.",
      "Sie machen nicht nur andere, sondern auch mich glücklich.",
      "Gutes zu tun kostet oft gar nichts.",
      "Am Abend fühle ich mich dann leicht und ruhig."
    ],
    en: [
      "I believe that good deeds are important.",
      "Every day I try to help someone.",
      "Sometimes it's just a friendly word.",
      "Sometimes I give money for people in need.",
      "Such deeds are called merit in Buddhism.",
      "They make not only others, but also me, happy.",
      "Doing good often costs nothing at all.",
      "In the evening I then feel light and calm."
    ],
    glossary: [
      { de: "die Tat", en: "deed / act" },
      { de: "helfen", en: "to help" },
      { de: "die Not", en: "need / hardship" },
      { de: "der Verdienst", en: "merit" },
      { de: "kosten", en: "to cost" },
      { de: "leicht", en: "light" },
      { de: "ruhig", en: "calm" }
    ],
    prompts: [
      { de_cue: "Wie hilfst du anderen Menschen?", en_cue: "How do you help other people?", model_de: "Ich helfe mit einem freundlichen Wort oder mit etwas Geld." },
      { de_cue: "Wie fühlst du dich, wenn du Gutes tust?", en_cue: "How do you feel when you do good?", model_de: "Wenn ich Gutes tue, fühle ich mich leicht und ruhig." }
    ]
  },
  {
    id: "ehrlichkeit",
    title: "Immer ehrlich sein",
    level: "A2",
    text: [
      "Ehrlichkeit ist mir sehr wichtig.",
      "Ich sage lieber die Wahrheit, auch wenn sie schwer ist.",
      "Lügen machen das Leben nur komplizierter.",
      "Wenn ich ehrlich bin, kann ich ruhig schlafen.",
      "Meine Freunde wissen, dass sie mir vertrauen können.",
      "Auch bei der Arbeit bin ich immer offen und klar.",
      "Ein ehrliches Wort ist mehr wert als eine schöne Lüge.",
      "Ehrlichkeit bringt mir Ruhe und gute Freunde."
    ],
    en: [
      "Honesty is very important to me.",
      "I prefer to tell the truth, even when it's hard.",
      "Lies only make life more complicated.",
      "When I'm honest, I can sleep peacefully.",
      "My friends know they can trust me.",
      "At work too I am always open and clear.",
      "An honest word is worth more than a beautiful lie.",
      "Honesty brings me peace and good friends."
    ],
    glossary: [
      { de: "die Ehrlichkeit", en: "honesty" },
      { de: "die Wahrheit", en: "truth" },
      { de: "lügen", en: "to lie" },
      { de: "die Lüge", en: "lie" },
      { de: "vertrauen", en: "to trust" },
      { de: "offen", en: "open" },
      { de: "wert", en: "worth" }
    ],
    prompts: [
      { de_cue: "Warum ist dir Ehrlichkeit wichtig?", en_cue: "Why is honesty important to you?", model_de: "Wenn ich ehrlich bin, kann ich ruhig schlafen und man vertraut mir." },
      { de_cue: "Was machst du, wenn die Wahrheit schwer ist?", en_cue: "What do you do when the truth is hard?", model_de: "Ich sage trotzdem die Wahrheit, aber freundlich." }
    ]
  },
  {
    id: "niemandem-wehtun",
    title: "Niemandem wehtun",
    level: "B1",
    text: [
      "Ich versuche, keinem Menschen und keinem Tier wehzutun.",
      "Auch mit Worten kann man jemanden verletzen.",
      "Deshalb denke ich nach, bevor ich spreche.",
      "Wenn ich wütend bin, warte ich lieber einen Moment.",
      "Freundlichkeit ist stärker als Wut.",
      "Ich möchte, dass sich andere in meiner Nähe sicher fühlen.",
      "Kleine gute Taten machen die Welt ein bisschen besser.",
      "So lebe ich in Frieden mit mir und mit anderen."
    ],
    en: [
      "I try not to hurt any person or any animal.",
      "With words too one can hurt someone.",
      "That's why I think before I speak.",
      "When I'm angry, I prefer to wait a moment.",
      "Kindness is stronger than anger.",
      "I want others to feel safe near me.",
      "Small good deeds make the world a little better.",
      "That way I live in peace with myself and with others."
    ],
    glossary: [
      { de: "wehtun", en: "to hurt" },
      { de: "das Tier", en: "animal" },
      { de: "verletzen", en: "to hurt / injure" },
      { de: "wütend", en: "angry" },
      { de: "die Wut", en: "anger" },
      { de: "die Freundlichkeit", en: "kindness" },
      { de: "sicher", en: "safe" },
      { de: "der Frieden", en: "peace" }
    ],
    prompts: [
      { de_cue: "Was machst du, wenn du wütend bist?", en_cue: "What do you do when you're angry?", model_de: "Wenn ich wütend bin, warte ich einen Moment und atme ruhig." },
      { de_cue: "Wie behandelst du andere Menschen?", en_cue: "How do you treat other people?", model_de: "Ich versuche, freundlich zu sein und niemandem wehzutun." }
    ]
  },
  {
    id: "ohne-alkohol",
    title: "Ein Leben ohne Alkohol",
    level: "A2",
    text: [
      "Ich trinke keinen Alkohol.",
      "Für mich ist ein klarer Kopf sehr wichtig.",
      "Mit Alkohol verliert man leicht die Kontrolle.",
      "Ich fühle mich ohne Alkohol gesünder und wacher.",
      "Auf Partys trinke ich Wasser oder Saft.",
      "Meine Freunde akzeptieren das ohne Problem.",
      "So bleibe ich morgens fit und habe mehr Energie.",
      "Ich brauche keinen Alkohol, um glücklich zu sein."
    ],
    en: [
      "I don't drink alcohol.",
      "For me a clear head is very important.",
      "With alcohol one easily loses control.",
      "Without alcohol I feel healthier and more awake.",
      "At parties I drink water or juice.",
      "My friends accept that without a problem.",
      "That way I stay fit in the morning and have more energy.",
      "I don't need alcohol to be happy."
    ],
    glossary: [
      { de: "der Alkohol", en: "alcohol" },
      { de: "klar", en: "clear" },
      { de: "die Kontrolle", en: "control" },
      { de: "verlieren", en: "to lose" },
      { de: "wach", en: "awake" },
      { de: "der Saft", en: "juice" },
      { de: "akzeptieren", en: "to accept" }
    ],
    prompts: [
      { de_cue: "Warum trinkst du keinen Alkohol?", en_cue: "Why don't you drink alcohol?", model_de: "Ich möchte einen klaren Kopf und fühle mich ohne Alkohol besser." },
      { de_cue: "Was trinkst du auf einer Party?", en_cue: "What do you drink at a party?", model_de: "Auf einer Party trinke ich Wasser oder Saft." }
    ]
  },
  {
    id: "treue",
    title: "Treue und Respekt in der Beziehung",
    level: "B1",
    text: [
      "In einer Beziehung sind Treue und Respekt sehr wichtig.",
      "Ich bin meiner Frau treu und ehrlich.",
      "Vertrauen ist die Basis für eine gute Ehe.",
      "Wir reden offen über unsere Gefühle.",
      "Ich möchte niemanden verletzen oder enttäuschen.",
      "Eine ehrliche Beziehung gibt mir Sicherheit.",
      "Kleine Gesten der Liebe sind jeden Tag wichtig.",
      "So wächst das Vertrauen mit der Zeit."
    ],
    en: [
      "In a relationship, faithfulness and respect are very important.",
      "I am faithful and honest to my wife.",
      "Trust is the basis for a good marriage.",
      "We talk openly about our feelings.",
      "I don't want to hurt or disappoint anyone.",
      "An honest relationship gives me security.",
      "Small gestures of love are important every day.",
      "That way trust grows over time."
    ],
    glossary: [
      { de: "die Treue", en: "faithfulness" },
      { de: "der Respekt", en: "respect" },
      { de: "die Beziehung", en: "relationship" },
      { de: "treu", en: "faithful" },
      { de: "die Ehe", en: "marriage" },
      { de: "das Gefühl", en: "feeling" },
      { de: "enttäuschen", en: "to disappoint" },
      { de: "die Sicherheit", en: "security" },
      { de: "wachsen", en: "to grow" }
    ],
    prompts: [
      { de_cue: "Was ist in einer Beziehung wichtig?", en_cue: "What is important in a relationship?", model_de: "In einer Beziehung sind für mich Treue, Respekt und Vertrauen wichtig." },
      { de_cue: "Wie zeigt man Liebe im Alltag?", en_cue: "How do you show love in daily life?", model_de: "Mit kleinen Gesten und mit ehrlichen Worten jeden Tag." }
    ]
  },
  {
    id: "fleissig-arbeiten",
    title: "Fleißig arbeiten",
    level: "B1",
    text: [
      "Ich arbeite gern und hart.",
      "Fleiß ist für mich wichtiger als Talent.",
      "Wenn ich ein Ziel habe, gebe ich nicht schnell auf.",
      "Auch schwere Aufgaben mache ich Schritt für Schritt.",
      "Nach der Arbeit bin ich müde, aber stolz.",
      "Erfolg kommt nicht von allein, sondern durch Übung.",
      "Trotzdem vergesse ich die Pausen nicht.",
      "Harte Arbeit und Ruhe müssen im Gleichgewicht sein."
    ],
    en: [
      "I like to work, and to work hard.",
      "Diligence is more important to me than talent.",
      "When I have a goal, I don't give up quickly.",
      "Even hard tasks I do step by step.",
      "After work I'm tired, but proud.",
      "Success doesn't come by itself, but through practice.",
      "Still, I don't forget the breaks.",
      "Hard work and rest must be in balance."
    ],
    glossary: [
      { de: "fleißig", en: "diligent / hard-working" },
      { de: "der Fleiß", en: "diligence" },
      { de: "das Talent", en: "talent" },
      { de: "aufgeben", en: "to give up" },
      { de: "die Aufgabe", en: "task" },
      { de: "stolz", en: "proud" },
      { de: "der Erfolg", en: "success" },
      { de: "die Pause", en: "break" },
      { de: "das Gleichgewicht", en: "balance" }
    ],
    prompts: [
      { de_cue: "Wie gehst du mit schweren Aufgaben um?", en_cue: "How do you deal with hard tasks?", model_de: "Ich mache sie ruhig Schritt für Schritt und gebe nicht auf." },
      { de_cue: "Was ist für dich Erfolg?", en_cue: "What is success for you?", model_de: "Erfolg kommt für mich durch harte Arbeit und Übung." }
    ]
  },
  {
    id: "ziele-erreichen",
    title: "Ziele erreichen",
    level: "B1",
    text: [
      "Ich habe im Leben klare Ziele.",
      "Große Ziele teile ich in kleine Schritte.",
      "Jeden Tag mache ich etwas für mein Ziel.",
      "Manchmal gibt es Probleme, aber ich bleibe geduldig.",
      "Aus Fehlern lerne ich für das nächste Mal.",
      "Wenn ich etwas erreiche, freue ich mich sehr.",
      "Dann setze ich mir ein neues Ziel.",
      "So wachse ich Schritt für Schritt."
    ],
    en: [
      "I have clear goals in life.",
      "I divide big goals into small steps.",
      "Every day I do something for my goal.",
      "Sometimes there are problems, but I stay patient.",
      "From mistakes I learn for the next time.",
      "When I achieve something, I'm very happy.",
      "Then I set myself a new goal.",
      "That way I grow step by step."
    ],
    glossary: [
      { de: "das Ziel", en: "goal" },
      { de: "teilen", en: "to divide / share" },
      { de: "der Schritt", en: "step" },
      { de: "geduldig", en: "patient" },
      { de: "erreichen", en: "to achieve / reach" },
      { de: "der Fehler", en: "mistake" },
      { de: "wachsen", en: "to grow" }
    ],
    prompts: [
      { de_cue: "Was ist dein nächstes Ziel?", en_cue: "What is your next goal?", model_de: "Mein nächstes Ziel ist, mein Deutsch auf B1 zu bringen." },
      { de_cue: "Wie erreichst du deine Ziele?", en_cue: "How do you reach your goals?", model_de: "Ich teile große Ziele in kleine Schritte und bleibe geduldig." }
    ]
  },
  {
    id: "lebenslang-lernen",
    title: "Immer weiterlernen",
    level: "A2",
    text: [
      "Ich lerne gern mein ganzes Leben lang.",
      "Jeden Tag möchte ich etwas Neues wissen.",
      "Ich lese Bücher, höre Podcasts und stelle Fragen.",
      "Lernen hält den Geist jung und wach.",
      "Es ist nie zu spät, etwas Neues zu beginnen.",
      "Kleine Schritte jeden Tag bringen große Ergebnisse.",
      "Ich lerne auch von anderen Menschen viel.",
      "Wissen macht mich frei und neugierig."
    ],
    en: [
      "I like to learn my whole life long.",
      "Every day I want to know something new.",
      "I read books, listen to podcasts and ask questions.",
      "Learning keeps the mind young and awake.",
      "It's never too late to start something new.",
      "Small steps every day bring big results.",
      "I also learn a lot from other people.",
      "Knowledge makes me free and curious."
    ],
    glossary: [
      { de: "lebenslang", en: "lifelong" },
      { de: "wissen", en: "to know" },
      { de: "die Frage", en: "question" },
      { de: "der Geist", en: "mind / spirit" },
      { de: "das Ergebnis", en: "result" },
      { de: "das Wissen", en: "knowledge" },
      { de: "neugierig", en: "curious" }
    ],
    prompts: [
      { de_cue: "Was möchtest du noch lernen?", en_cue: "What would you still like to learn?", model_de: "Ich möchte noch besser Deutsch lernen und mehr über Philosophie wissen." },
      { de_cue: "Wie lernst du Neues?", en_cue: "How do you learn new things?", model_de: "Ich lese Bücher, höre Podcasts und stelle viele Fragen." }
    ]
  },
  {
    id: "glueck",
    title: "Was ist wahres Glück?",
    level: "B1",
    text: [
      "Für mich ist Glück nicht Geld oder Luxus.",
      "Wahres Glück kommt von innen.",
      "Ich bin glücklich, wenn meine Familie gesund ist.",
      "Ein ruhiger Geist ist mehr wert als viele Dinge.",
      "Ich freue mich über kleine Momente jeden Tag.",
      "Dankbarkeit macht mein Herz leicht.",
      "Wenn ich anderen helfe, bin ich auch selbst glücklich.",
      "Glück ist keine Sache, sondern eine Art zu leben."
    ],
    en: [
      "For me, happiness is not money or luxury.",
      "True happiness comes from within.",
      "I'm happy when my family is healthy.",
      "A calm mind is worth more than many things.",
      "I enjoy small moments every day.",
      "Gratitude makes my heart light.",
      "When I help others, I'm also happy myself.",
      "Happiness is not a thing, but a way of living."
    ],
    glossary: [
      { de: "das Glück", en: "happiness / luck" },
      { de: "der Luxus", en: "luxury" },
      { de: "wahr", en: "true" },
      { de: "der Geist", en: "mind / spirit" },
      { de: "wert", en: "worth" },
      { de: "die Dankbarkeit", en: "gratitude" },
      { de: "die Sache", en: "thing / matter" }
    ],
    prompts: [
      { de_cue: "Was macht dich glücklich?", en_cue: "What makes you happy?", model_de: "Mich machen meine Familie und ein ruhiger Geist glücklich." },
      { de_cue: "Was ist für dich wahres Glück?", en_cue: "What is true happiness for you?", model_de: "Wahres Glück kommt für mich von innen, nicht von Geld." }
    ]
  },
  {
    id: "anderen-helfen",
    title: "Anderen helfen, glücklich zu werden",
    level: "B1",
    text: [
      "Ich möchte, dass andere Menschen glücklich sind.",
      "Deshalb höre ich ihnen zu und bin für sie da.",
      "Manchmal reicht schon ein gutes Wort.",
      "Ich teile gern mein Wissen und meine Zeit.",
      "Wenn ich jemandem helfe, wird auch mein Herz warm.",
      "Ich versuche, ein gutes Beispiel zu sein.",
      "Ruhe und Freundlichkeit kann man weitergeben.",
      "So werden langsam mehr Menschen zufrieden und frei."
    ],
    en: [
      "I want other people to be happy.",
      "That's why I listen to them and am there for them.",
      "Sometimes a good word is already enough.",
      "I like to share my knowledge and my time.",
      "When I help someone, my heart also becomes warm.",
      "I try to be a good example.",
      "Calm and kindness can be passed on.",
      "That way, slowly, more people become content and free."
    ],
    glossary: [
      { de: "zuhören", en: "to listen" },
      { de: "reichen", en: "to be enough" },
      { de: "teilen", en: "to share" },
      { de: "das Wissen", en: "knowledge" },
      { de: "das Beispiel", en: "example" },
      { de: "weitergeben", en: "to pass on" },
      { de: "zufrieden", en: "content" }
    ],
    prompts: [
      { de_cue: "Wie hilfst du anderen, glücklich zu sein?", en_cue: "How do you help others be happy?", model_de: "Ich höre zu, teile meine Zeit und sage ein gutes Wort." },
      { de_cue: "Was möchtest du weitergeben?", en_cue: "What do you want to pass on?", model_de: "Ich möchte Ruhe und Freundlichkeit an andere weitergeben." }
    ]
  },
  {
    id: "beim-arzt",
    title: "Beim Arzt",
    level: "A2",
    text: [
      "Heute gehe ich zum Arzt, weil ich Kopfschmerzen habe.",
      "Zuerst warte ich im Wartezimmer.",
      "Die Ärztin fragt mich, was mir fehlt.",
      "Ich erkläre meine Probleme genau.",
      "Sie untersucht mich und gibt mir ein Rezept.",
      "In der Apotheke hole ich die Medikamente.",
      "Ich soll viel trinken und mich ausruhen.",
      "Nach ein paar Tagen geht es mir wieder besser."
    ],
    en: [
      "Today I'm going to the doctor because I have a headache.",
      "First I wait in the waiting room.",
      "The doctor asks me what's wrong.",
      "I explain my problems exactly.",
      "She examines me and gives me a prescription.",
      "At the pharmacy I pick up the medicine.",
      "I should drink a lot and rest.",
      "After a few days I feel better again."
    ],
    glossary: [
      { de: "der Arzt", en: "doctor" },
      { de: "die Kopfschmerzen", en: "headache" },
      { de: "das Wartezimmer", en: "waiting room" },
      { de: "untersuchen", en: "to examine" },
      { de: "das Rezept", en: "prescription" },
      { de: "die Apotheke", en: "pharmacy" },
      { de: "das Medikament", en: "medicine" }
    ],
    prompts: [
      { de_cue: "Was sagst du dem Arzt?", en_cue: "What do you tell the doctor?", model_de: "Ich sage: Ich habe Kopfschmerzen und fühle mich nicht gut." },
      { de_cue: "Was machst du, wenn du krank bist?", en_cue: "What do you do when you're sick?", model_de: "Ich gehe zum Arzt, nehme Medikamente und ruhe mich aus." }
    ]
  },
  {
    id: "im-restaurant",
    title: "Im Restaurant",
    level: "A2",
    text: [
      "Am Freitagabend gehe ich mit Freunden essen.",
      "Wir suchen einen Tisch für vier Personen.",
      "Der Kellner bringt uns die Speisekarte.",
      "Ich bestelle eine Suppe und ein Hauptgericht.",
      "Das Essen schmeckt frisch und lecker.",
      "Wir reden viel und lachen zusammen.",
      "Am Ende bitten wir um die Rechnung.",
      "Wir bezahlen und geben ein kleines Trinkgeld."
    ],
    en: [
      "On Friday evening I go out to eat with friends.",
      "We look for a table for four people.",
      "The waiter brings us the menu.",
      "I order a soup and a main course.",
      "The food tastes fresh and delicious.",
      "We talk a lot and laugh together.",
      "At the end we ask for the bill.",
      "We pay and give a small tip."
    ],
    glossary: [
      { de: "der Kellner", en: "waiter" },
      { de: "die Speisekarte", en: "menu" },
      { de: "bestellen", en: "to order" },
      { de: "das Hauptgericht", en: "main course" },
      { de: "schmecken", en: "to taste" },
      { de: "die Rechnung", en: "bill" },
      { de: "das Trinkgeld", en: "tip" }
    ],
    prompts: [
      { de_cue: "Was bestellst du gern im Restaurant?", en_cue: "What do you like to order in a restaurant?", model_de: "Ich bestelle gern eine Suppe und ein Hauptgericht." },
      { de_cue: "Wie bittest du um die Rechnung?", en_cue: "How do you ask for the bill?", model_de: "Ich sage: Die Rechnung, bitte." }
    ]
  },
  {
    id: "kochen",
    title: "Kochen zu Hause",
    level: "A2",
    text: [
      "Ich koche gern zu Hause.",
      "Am liebsten mache ich einfaches, gesundes Essen.",
      "Zuerst schneide ich Gemüse und koche Reis.",
      "Ich benutze frische Zutaten und wenig Salz.",
      "Kochen macht mir Spaß und entspannt mich.",
      "Meine Kinder helfen manchmal in der Küche.",
      "Zusammen essen wir dann am Tisch.",
      "Selbst gekochtes Essen schmeckt am besten."
    ],
    en: [
      "I like cooking at home.",
      "I most like to make simple, healthy food.",
      "First I cut vegetables and cook rice.",
      "I use fresh ingredients and little salt.",
      "Cooking is fun for me and relaxes me.",
      "My children sometimes help in the kitchen.",
      "Then we eat together at the table.",
      "Home-cooked food tastes best."
    ],
    glossary: [
      { de: "kochen", en: "to cook" },
      { de: "schneiden", en: "to cut" },
      { de: "der Reis", en: "rice" },
      { de: "die Zutat", en: "ingredient" },
      { de: "das Salz", en: "salt" },
      { de: "die Küche", en: "kitchen" },
      { de: "schmecken", en: "to taste" }
    ],
    prompts: [
      { de_cue: "Was kochst du gern?", en_cue: "What do you like to cook?", model_de: "Ich koche gern einfaches und gesundes Essen mit Gemüse." },
      { de_cue: "Wer hilft dir beim Kochen?", en_cue: "Who helps you cook?", model_de: "Manchmal helfen mir meine Kinder in der Küche." }
    ]
  },
  {
    id: "freunde-treffen",
    title: "Freunde treffen",
    level: "A2",
    text: [
      "Am Wochenende treffe ich gern meine Freunde.",
      "Wir gehen spazieren oder trinken einen Kaffee.",
      "Manchmal laden wir Freunde zu uns nach Hause ein.",
      "Wir reden über die Arbeit, die Familie und das Leben.",
      "Gute Gespräche geben mir viel Energie.",
      "Echte Freunde hören zu und helfen einander.",
      "Ich bin dankbar für meine Freunde.",
      "Zeit mit ihnen ist nie verlorene Zeit."
    ],
    en: [
      "On the weekend I like to meet my friends.",
      "We go for a walk or have a coffee.",
      "Sometimes we invite friends to our home.",
      "We talk about work, family and life.",
      "Good conversations give me a lot of energy.",
      "Real friends listen and help each other.",
      "I'm grateful for my friends.",
      "Time with them is never wasted time."
    ],
    glossary: [
      { de: "der Freund", en: "friend" },
      { de: "spazieren gehen", en: "to go for a walk" },
      { de: "einladen", en: "to invite" },
      { de: "das Gespräch", en: "conversation" },
      { de: "zuhören", en: "to listen" },
      { de: "einander", en: "each other" },
      { de: "dankbar", en: "grateful" }
    ],
    prompts: [
      { de_cue: "Was machst du mit deinen Freunden?", en_cue: "What do you do with your friends?", model_de: "Wir gehen spazieren, trinken Kaffee und reden viel." },
      { de_cue: "Was ist für dich ein guter Freund?", en_cue: "What is a good friend for you?", model_de: "Ein guter Freund hört zu und hilft, wenn man ihn braucht." }
    ]
  },
  {
    id: "geld-sparen",
    title: "Geld sparen",
    level: "A2",
    text: [
      "Ich versuche, jeden Monat etwas Geld zu sparen.",
      "Zuerst schreibe ich auf, was ich ausgebe.",
      "Dinge, die ich nicht brauche, kaufe ich nicht.",
      "Ich vergleiche Preise, bevor ich etwas kaufe.",
      "Kleine Beträge werden mit der Zeit groß.",
      "Mit dem Ersparten plane ich Reisen und die Zukunft.",
      "Geld ist nicht alles, aber es gibt Sicherheit.",
      "Ich möchte einfach, aber ohne Sorgen leben."
    ],
    en: [
      "I try to save some money every month.",
      "First I write down what I spend.",
      "Things I don't need, I don't buy.",
      "I compare prices before I buy something.",
      "Small amounts become big over time.",
      "With the savings I plan trips and the future.",
      "Money isn't everything, but it gives security.",
      "I want to live simply, but without worries."
    ],
    glossary: [
      { de: "sparen", en: "to save" },
      { de: "ausgeben", en: "to spend" },
      { de: "vergleichen", en: "to compare" },
      { de: "der Preis", en: "price" },
      { de: "der Betrag", en: "amount" },
      { de: "die Sicherheit", en: "security" },
      { de: "die Sorge", en: "worry" }
    ],
    prompts: [
      { de_cue: "Wie sparst du Geld?", en_cue: "How do you save money?", model_de: "Ich schreibe auf, was ich ausgebe, und kaufe nur, was ich brauche." },
      { de_cue: "Wofür sparst du?", en_cue: "What are you saving for?", model_de: "Ich spare für Reisen und für die Zukunft meiner Familie." }
    ]
  },
  {
    id: "das-wetter",
    title: "Das Wetter",
    level: "A2",
    text: [
      "Das Wetter in der Schweiz ist oft wechselhaft.",
      "Im Sommer ist es warm und die Sonne scheint.",
      "Im Winter schneit es und die Berge sind weiß.",
      "An manchen Tagen regnet es den ganzen Tag.",
      "Dann bleibe ich lieber zu Hause und lese.",
      "Bei schönem Wetter gehe ich gern nach draußen.",
      "Ich schaue morgens immer den Wetterbericht.",
      "So weiß ich, welche Jacke ich brauche."
    ],
    en: [
      "The weather in Switzerland is often changeable.",
      "In summer it's warm and the sun shines.",
      "In winter it snows and the mountains are white.",
      "On some days it rains the whole day.",
      "Then I prefer to stay home and read.",
      "In nice weather I like to go outside.",
      "In the morning I always check the weather report.",
      "That way I know which jacket I need."
    ],
    glossary: [
      { de: "das Wetter", en: "weather" },
      { de: "wechselhaft", en: "changeable" },
      { de: "scheinen", en: "to shine" },
      { de: "schneien", en: "to snow" },
      { de: "regnen", en: "to rain" },
      { de: "draußen", en: "outside" },
      { de: "der Wetterbericht", en: "weather report" }
    ],
    prompts: [
      { de_cue: "Wie ist das Wetter heute?", en_cue: "How is the weather today?", model_de: "Heute ist es sonnig und warm." },
      { de_cue: "Was machst du bei schlechtem Wetter?", en_cue: "What do you do in bad weather?", model_de: "Bei schlechtem Wetter bleibe ich zu Hause und lese." }
    ]
  }
];
