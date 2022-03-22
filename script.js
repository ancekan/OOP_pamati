//1. keyword new

// let Book = new Object();

// //properties
// Book.title = "I, Robot";
// Book.author = "Isaac Asimov";
// Book.price = 15.30;

// //methods
// Book.getInfo = function() {
//     return this.author + ", " + this.title + " - " + "cena: " + this.price;
// }

//3. function

function Book(title, author) { //tiek definēts konstruktors
    //properties
    this.title = title;
    this.author = author;

    //methods
    this.getInfo = getBookInfo; //tiek izmantota ārējā funkcija
}

//funkcija, kas tiek sasaistīta ar metodi getInfo
function getBookInfo() {
    return this.author + ", " + this.title;
}

//tiek definēts jauns objekts ar konkrētām vērtībām
let Book1 = new Book("Sprīdītis", "Anna Brigadere");
