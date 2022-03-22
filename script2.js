function trijsturis(a, b, c) { //tiek definēts konstruktors
    //properties
    this.mala1 = a;
    this.mala2 = b;
    this.mala3 = c;

    //methods
    this.perimetrs = perimetraAprekins; //tiek izmantota ārējā funkcija
}

//funkcija, kas tiek sasaistīta ar metodi getInfo
function perimetraAprekins() {
    return this.mala1 + this.mala2 + this.mala3;
}

//tiek definēts jauns objekts ar konkrētām vērtībām
let trijsturisABC = new trijsturis(7, 3, 5);

