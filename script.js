let alleBildeKort = document.querySelectorAll(".kort");

for (let bildeKort of alleBildeKort){
    let favorittKnapp = bildeKort.querySelector("button");
    console.log(bildeKort);
    console.log(favorittKnapp);

 favorittKnapp.addEventListener("click", () => sorterFavoritter (bildeKort)); //* kjører denne forhåndsdefinerte funksjonen, men med en egen variable for dette tilfellet *//  

}

function sorterFavoritter(kort) {
console.log(kort);
}