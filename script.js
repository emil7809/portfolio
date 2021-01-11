window.addEventListener("load", sidenVises);




function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);



    //fade in trasition
    document.querySelector("body").classList.add("fade_in");

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
    x.classList.toggle("change");
}

function kontaktKlik() {
    console.log("kontaktKlik");

    //Start contactKlik animation

    //Åben kontakt
    document.querySelector("#kontakt_siden_container").classList.remove("remove");
    document.querySelector("#besked_sendt").classList.add("remove");

    // Ved klik på x element -> x
    document.querySelector("#x").addEventListener("click", x);



}

function takForDinBesked() {
    console.log("takForDinBesked");

    //Start takForDinBesked animation

    //Åben messageSendt
    document.querySelector("#besked_sendt").classList.remove("remove");

    // Ved klik på x2 element -> x2
    document.querySelector("#x2").addEventListener("click", x2);

    // Ved klik på tilbage element -> tilvage
    document.querySelector("#tilbage").addEventListener("click", tilbage);

}

function x() {
    console.log("x");

    //Start x animation


    //Start luk animation


    //Luk siden ned
    document.querySelector("#kontakt_siden_container").classList.add("remove");
    document.querySelector("#besked_sendt").classList.add("remove");

}

function x2() {
    console.log("x2");

    //Start x animation


    //Start luk animation


    //Luk siden ned
    document.querySelector("#kontakt_siden_container").classList.add("remove");

}

function tilbage() {
    console.log("tilbage");

    //Start back animation


    //Luk siden ned
    document.querySelector("#kontakt_siden_container").classList.add("remove");


}
