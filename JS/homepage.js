var headPos = window.scrollY;

window.addEventListener('scroll', function() {
    headPos = window.scrollY;
    visi();
    transitionNight();
    closeHamburger();
});

window.addEventListener("load", addCloseToHamburger);

// goBackUp button;
function visi(){
    if(headPos < 735){
        document.getElementById("goBackUp").style.visibility = "hidden";
        document.getElementById("goBackUp").style.opacity = "0";
        document.getElementById("goBackUp").style.right = "0px";
    } else {
        document.getElementById("goBackUp").style.visibility = "visible";
        document.getElementById("goBackUp").style.opacity = "1";
        document.getElementById("goBackUp").style.right = "20px";
    }
}

// menu-button
let menuOpen = false;

function menuBtn() {
    if (!menuOpen) {
        document.querySelector("#menu").classList.add("open");
        document.querySelector("#menu").classList.replace("close", "open");
        menuOpen = true;
        document.querySelector("#hideli").id = "showli";
    } else {
        document.querySelector("#menu").classList.replace("open", "close");
        menuOpen = false;
        document.querySelector("#showli").id = "hideli";
    };
};

function addCloseToHamburger(){
    document.querySelector("#menu").classList.add("close");
}

function closeHamburger(){
    if (menuOpen === true && headPos > 100){
        document.querySelector("#menu").classList.replace("open", "close");
        menuOpen = false;
        document.querySelector("#showli").id = "hideli";
    }
}

function transitionNight(){
    if (headPos > 210){
        document.querySelector("#sun").style.opacity = "0";
        document.querySelector("section:nth-child(1)").style.backgroundImage = "url(content/mainbgnight.svg)";
        document.querySelector("section:nth-child(2)").style.backgroundImage = "url(content/mainbgmiddle.svg)";
        document.querySelector("section:nth-child(1)").style.backgroundColor = "#0E0F19";
        document.querySelector("#introParagraph").style.color = "#f8c4cc";
    }
    if (headPos < 210){
        document.querySelector("#sun").style.opacity = "1";
        document.querySelector("section:nth-child(1)").style.backgroundImage = "url(content/mainbg.svg)";
        document.querySelector("section:nth-child(2)").style.backgroundImage = "url(content/mainbgmiddlescroll.svg)";
        document.querySelector("section:nth-child(1)").style.backgroundColor = "#f8c4cc";
        document.querySelector("#introParagraph").style.color = "white";
    }

}