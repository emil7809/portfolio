window.addEventListener("load", sidenVises);




function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);



    //fade in trasition
    document.querySelector("body").classList.add("fade_in");



    // Ved klik på kontakt element -> kontaktKlik
    document.querySelector("#kontakt_style").addEventListener("mousedown", kontaktKlik);

}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");
    myFunctionBurger(this);

}

function myFunctionBurger(x) {
    x.classList.toggle("change");
}

function kontaktKlik() {
    console.log("kontaktKlik");



    //Åben kontakt
    document.querySelector("#kontakt_siden_container").classList.remove("remove");
    document.querySelector("#besked_sendt").classList.add("remove");

    // Ved klik på x element -> x
    document.querySelector("#x").addEventListener("click", x);



}

function takForDinBesked() {
    console.log("takForDinBesked");



    //Åben messageSendt
    document.querySelector("#besked_sendt").classList.remove("remove");

    // Ved klik på x2 element -> x2
    document.querySelector("#x2").addEventListener("click", x2);

    // Ved klik på tilbage element -> tilvage
    document.querySelector("#tilbage").addEventListener("click", tilbage);

}

function x() {
    console.log("x");



    //Luk siden ned
    document.querySelector("#kontakt_siden_container").classList.add("remove");
    document.querySelector("#besked_sendt").classList.add("remove");

}

function x2() {
    console.log("x2");



    //Luk siden ned
    document.querySelector("#kontakt_siden_container").classList.add("remove");

}

function tilbage() {
    console.log("tilbage");




    //Luk siden ned
    document.querySelector("#kontakt_siden_container").classList.add("remove");


}
