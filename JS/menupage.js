// menu-button
let menuOpen = false;

function menuBtn() {
    if (!menuOpen) {
        document.querySelector("#menu").classList.add("open");
        menuOpen = true;
        document.querySelector("#hideli").id = "showli";
    } else {
        document.querySelector("#menu").classList.remove("open");
        menuOpen = false;
        document.querySelector("#showli").id = "hideli";
    };
};