var headPos = window.scrollY;

window.addEventListener('scroll', function (){
    headPos = window.scrollY;
    closeHamburger();
});

window.addEventListener("load", addCloseToHamburger);

// menu-button
let menuOpen = false;

function menuBtn() {
    if (!menuOpen) {
        document.querySelector("#menu").classList.add("open");
        document.querySelector("#menu").classList.replace("close", "open");
        menuOpen = true;
        document.querySelector("#hideli").id = "showli";
        document.querySelector(".mnu-btn").className = "mnu-btn-close";
    } else {
        document.querySelector("#menu").classList.replace("open", "close");
        menuOpen = false;
        document.querySelector("#showli").id = "hideli";
        document.querySelector(".mnu-btn-close").className = "mnu-btn";
    };
};

// this runs when to add close class to menu, making  it disappear at first
function addCloseToHamburger(){
    document.querySelector("#menu").classList.add("close");
}

// this is for detecting when the hamburger is on
function closeHamburger(){
    if (menuOpen === true && headPos > 100){
        document.querySelector("#menu").classList.replace("open", "close");
        document.querySelector(".mnu-btn-close").className = "mnu-btn";
        menuOpen = false;
        document.querySelector("#showli").id = "hideli";
    }
}