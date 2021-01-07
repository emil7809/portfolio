window.addEventListener("load", sidenVises);

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");
    myFunction(this);

}

function myFunction(x) {

    x.classList.toggle("change");
}
