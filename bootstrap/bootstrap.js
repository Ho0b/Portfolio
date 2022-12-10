headPos = window.scrollY;

window.addEventListener("scroll", function (){
    headPos = window.scrollY;
    shiftColor();
});

window.addEventListener("load", function(){
    document.querySelector(".bgi-home-s1").id = "";
    document.querySelector(".bgi-home-s2").id = "";
});

function shiftColor(){
    if (headPos > 550){
    document.querySelector(".bgi-home-s1").id = "h-s1";
    document.querySelector(".bgi-home-s2").id = "h-s2";
    } else {
    document.querySelector(".bgi-home-s1").id = "";
    document.querySelector(".bgi-home-s2").id = "";
    }
}