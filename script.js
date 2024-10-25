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
}