window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    //Start background animation


    //Start splash Animation


    //Start portfolio animation


    //Start emilyHoolahan animation

    // Ved klik på kontakt element -> kontaktKlik
    document.querySelector("#kontakt").addEventListener("click", kontaktKlik);


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
    document.querySelector("#kontakt_siden_container").classList.remove("hidden_kontakt");
    document.querySelector("#besked_sendt").classList.add("hidden_kontakt");

    // Ved klik på x element -> x
    document.querySelector("#x").addEventListener("click", x);

    // Ved klik på send element -> sendBeskedKlik
    document.querySelector("#sendBtn").addEventListener("click", sendBeskedKlik)

}

function sendBeskedKlik() {
    console.log("sendBeskedKlik");

    //Start sendBeskedKlik animation

    //Åben messageSendt
    document.querySelector("#besked_sendt").classList.remove("hidden_kontakt");

    // Ved klik på x2 element -> x2
    document.querySelector("#x2").addEventListener("click", x2);

}

function x() {
    console.log("x");

    //Start x animation


    //Start luk animation


    //Luk siden ned
    document.querySelector("#kontakt_siden_container").classList.add("hidden_kontakt");
    document.querySelector("#besked_sendt").classList.add("hidden_kontakt");

}

function x2() {
    console.log("x2");

    //Start x animation


    //Start luk animation


    //Luk siden ned
    document.querySelector("#kontakt_siden_container").classList.add("hidden_kontakt");

}

function tilbage() {
    console.log("tilbage");

    //Start back animation


    //Luk siden ned



}
