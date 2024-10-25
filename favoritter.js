let favorittListe = lastFavoritter ();

for (let favorittBilde of favorittListe) {
    console.log (favorittBilde);

    let bildeKort = document.createElement("li")
bildeKort.textConent = favorittBilde.name;

console.log(bildeKort)
}

function lastFavoritter () {

}