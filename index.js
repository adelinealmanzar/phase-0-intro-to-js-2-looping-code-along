let names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(namesvar, eventname) {
    let array = [];
    for (let i = 0; i < namesvar.length; i++) {
        array.push(`Thank you, ${namesvar[i]}, for the wonderful ${eventname} gift!`);
    }
    return array;
};
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