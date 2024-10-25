//* Hent kortene fra HTML *//
let alleBildeKort = document.querySelectorAll(".kort");


//* For hvert av kortene, legg til en funksjon
for (let bildeKort of alleBildeKort) {
    //* her henter vi ut knappene
    let favorittKnapp = bildeKort.querySelector("button");
    console.log(bildeKort);
    console.log(favorittKnapp);

 //* kjører denne forhåndsdefinerte funksjonen ved klikk, men med en egen variable for dette tilfellet *//  
 favorittKnapp.addEventListener("click", () => sorterFavoritter (bildeKort)); 
}
/**
* Favoritt knapp funksjon
* @param {Element} kort //* gir kort beskrivelse som element, som gir den en liste med kode knyttet til seg der den blir referert til
*/
function sorterFavoritter(kort) {
console.log(kort);

// Hent ut url og bilde navn

let bilde = kort.querySelector ("img");


// lag bilde objektet
let bildeObjekt = {
    url: bilde.src,
    name: bilde.alt,
}

console.log(bildeObjekt);

console.log(bilde.src);
console.log(bilde.alt);

// last inn favoritt liste fra local storage


let favorittListe = lastFavoritter ();
console.log(favorittListe);

// Anta at vi ikke har lagt den til i favoritter enda
favorittListe.push(bildeObjekt);

// Lagre den oppdaterte liste i local storage
let nyfavorittStreng = JSON.stringify(favorittListe); // definerer nyfavorittStreng ved hjelp av string i JSON
localStorage.setItem("favorittListe", nyfavorittStreng); // local storage er en referanse, ikke et egendefinert variabel

console.log (favorittListe);
}




function lastFavoritter () {
let favorittStreng = localStorage.getItem("favorittListe");

    let favorittListe;
if (favorittStreng === null) {
    // Hvis første gang på siden, lag et ny array (liste)
    favorittListe = []; //* [] betyr liste
} else {
    //* Hvis vi har vært her før, konverter fra tekst streng til et array (liste)
    favorittListe = JSON.parse(favorittStreng);
}

return favorittListe;
}