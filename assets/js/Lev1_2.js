/* 
Aufgabenstellung

In dieser Übung werden wir map() lernen.

Nutze das Array getraenke aus dem Kommentarbereich.
Nutze die map()-Methode um in der neuen Variablen upperDrinks alle Getränke in Großbuchstaben zu speichern.
Wende nun diese map() Funktion an deinem Array getraenke an.
Gib nun upperDrinks in der Konsole aus.

Bonus: Versuche, deine Funktion in ArrowFunction umzuwandeln.

SYNTAX:
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Zurückgegebenes Element für new_array
}[, thisArg])

 */

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
] 
console.log(getraenke)

/* let upperDrinks = getraenke.map(elt => elt.toUpperCase())
console.log(upperDrinks) */

function toUpper(drinks) {
    return drinks.map(elt => elt.toUpperCase());
}
console.log(toUpper(getraenke));

/* 
function toUpperCase(yolo){
yolo.map(elt => elt.toUpperCase())
}

console.log(toUpperCase(getraenke)) */


