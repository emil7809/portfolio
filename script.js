window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    //Start background animation


    //Start splash Animation


    //Start portfolio animation


    //Start emilyHoolahan animation




}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");
    myFunctionBurger(this);

}

function myFunctionBurger(x) {
    console.log("myFunctionBurger");
    x.classList.toggle("change");
}

function kontaktKlik() {
    console.log("kontaktKlik");

    //Start contactKlik animation

    //Åben kontakt

}

function sendBeskedKlik() {
    console.log("sendBeskedKlik");

    //Start sendBeskedKlik animation

    //luk kontakt

    //Åben messageSendt

}
