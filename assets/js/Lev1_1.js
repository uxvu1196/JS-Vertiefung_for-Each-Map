/* 
Aufgabenstellung


In dieser Übung werden wir forEach() lernen.

Schreibe eine Funktion myDrinks(), die jedes Element eines Arrays in deiner Konsole ausgibt und mit document.write() in deine index.html schreibt.

Verwende die Liste aus dem Kommentar.
Sortiere getraenke vorher alphabetisch.

Syntax:
arr.forEach(function callback(currentValue [, index [, array]]) {
    // Ihr Iterator
}[, thisArg]);

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
/* 
let getraenkeAlk = [
    "bier",
    "wodka",
    "whiskey",
    "gin",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
] */

/* 
//CHEN
function myDrinks() {
    getraenke.forEach(element => {
        document.write('<p>' + element + '</p>');
    });
}
myDrinks(); 


function myDrinks() ist die Funktionsdefinition 
*/

/* 
//HISHAM
let myDrink = (arr) =>{
    arr.sort().forEach(element => {
        document.write(element+"<br>")
        
    }); 
    console.log(arr)
}
myDrink(getraenke); 

Lambdafunktion 
let myDrink = (arr) =>
identisch mit 
function myDrink(array){.....}
*/


//UYEN 
function myDrinks(){
    getraenke.sort().forEach(elt => document.write(elt+"<br>"))
}
myDrinks()



//Developer Mozilla
getraenke.forEach(element => console.log(element));


//YOUTUBE - KOMMENTAR SEHR SCHLIMM KLAUS, sieht hässlich aus, schreibt man so - Ist aber eine Mehode
getraenke.forEach(output)
function output(item, index, array){
    console.log(index, item)
}



