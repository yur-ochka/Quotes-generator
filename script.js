const createQuote = () =>{
    let politicalFigures1930s = ["Франклин Д. Рузвельт", "Адольф Гитлер", "Уинстон Черчилль", "Иосиф Сталин", "Бенито Муссолини", "Цзян Кай-шек", "Хидеки Тодзё", "Хьюи Лонг", "Франсиско Франко", "Лев Троцкий", "Махатма Ганди", "Невиль Чемберлен", "Корделл Халл", "Мао Цзэдун", "Хайле Селассие", "Эймон де Валера", "Мустафа Кемаль Ататюрк", "Жетулио Варгас", "Субхаш Чандра Бозе", "Шарль де Голль"];
    var funnyNounsArray = [
        "Лучше быть последним — первым, чем первым — последним.",
        "На случай, если буду нужен, то я там же, где и был, когда был не нужен.",
        "Если волк молчит, то лучше его не перебивай.",
        "Каждый в цирке думает, что знает в цирке, но не каждый, что в цирке знает, что в цирке не каждый знает думает.",
        "Легко вставать, когда ты не ложился.",
        "За двумя зайцами погонишься — рыбку из пруда не выловишь, делу время, а отмеришь семь раз…",
        "Каждый думает, что не знает что, но не каждый не знает, что знает, кто не я …",
        "Кем бы ты ни был, кем бы ты не стал, помни, где ты был и кем ты стал.",
        "В жизни полно лжи и грязи, она не так красива. Даже твой лучший друг может не поделиться пивом…",
        "Бесплатный сыр бывает только бесплатным.",
        "Я не боюсь ударов в спину, гораздо страшнее, если это моя спина…",
        "Сначала потом, затем, снова опять.",
        "Если в дверь не постучаться, ее никогда не откроют.",
        "Никогда не поздно, никогда не рано — поменять все поздно, если это рано.",
        "Каждый думает, что знает меня, но не каждый знает, что не знает, кто думает.",
      ];
    let quote = '';
    quote += " " + funnyNounsArray[Math.floor(Math.random()*funnyNounsArray.length)];
    document.getElementById("yourQuote").innerHTML = quote;
    document.getElementById("yourHuman").innerHTML = politicalFigures1930s[Math.floor(Math.random()*politicalFigures1930s.length)];
}