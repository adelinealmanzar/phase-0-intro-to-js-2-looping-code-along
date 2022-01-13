let names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, eventname) {
    let allCards = [];
    for(let i = 0; i < names.length; i++) {
        allCards.push(`Thank you, ${names[i]}, for the wonderful ${eventname} gift!`);
    }
    return allCards;
}
writeCards(
    names,
    "surprise",
);

function countDown(max) {
    while (max >= 0) {
        console.log(max);
        max--;
    }
};

countDown(10);