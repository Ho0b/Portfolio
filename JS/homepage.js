var headPos = window.scrollY;

window.addEventListener('scroll', function() {
    headPos = window.scrollY;
});

function goToProjects(){
    window.scrollTo(0, 1238);
}

// gotoProjects fade

function AniFadeIn(){
    document.querySelector(".goToProjects").classList.add("fadeanimation-in");
    document.querySelector(".goToProjects").classList.remove("fadeanimation-out");
}
function AniFadeOut(){
    document.querySelector(".goToProjects").classList.remove("fadeanimation-in");
    document.querySelector(".goToProjects").classList.add("fadeanimation-out");
}

window.addEventListener('scroll', visi);

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

window.addEventListener('scroll', titleBgChange);
// background change on scroll
function titleBgChange(){

    if(headPos > 400){
        document.querySelector(".sections").classList.add("bgfadein");
        document.querySelector("#mainbg").style.backgroundImage = "url(content/mainbgnight.svg)";
        document.querySelector(".sections-projects").style.backgroundImage = "url(content/mainbgmiddle.svg)";
    } else {
        document.querySelector(".sections").classList.remove("bgfadein");
        document.querySelector("#mainbg").style.backgroundImage = "url(content/mainbg.svg)";
        document.querySelector(".sections-projects").style.backgroundImage = "url(content/mainbgmiddlescroll.svg)";
    };
    if(headPos > 887){
        document.querySelector("#sun").style.visibility = "hidden";
    } else {
        document.querySelector("#sun").style.visibility = "visible";
    }
    
}

// menu-button
let menuOpen = false;

function menuBtn() {
    if (!menuOpen) {
        document.querySelector("#menu").classList.add("open");
        menuOpen = true;
        document.querySelector("#hideli").id = "showli";
        document.querySelector("#title-image").style.visibility = "hidden";
    } else {
        document.querySelector("#menu").classList.remove("open");
        menuOpen = false;
        document.querySelector("#showli").id = "hideli";
        document.querySelector("#title-image").style.visibility = "visible";
    };
};