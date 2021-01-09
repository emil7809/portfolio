window.addEventListener("load", sidenVises);

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

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

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunctionNav()
};

// Get the nav_class
let nav_class = document.getElementById("tema_nav");

// Get the offset position of the navbar
let sticky = nav_class.offsetTop;

// Add the sticky class to the nav_class when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunctionNav() {
    if (window.pageYOffset > sticky) {
        nav_class.classList.add("sticky");
    } else {
        nav_class.classList.remove("sticky");
    }
}
