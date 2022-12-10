var headPos = window.scrollY;

var projectPopup = document.getElementsByClassName(".projectsPopup");

window.addEventListener('scroll', function() {
    headPos = window.scrollY;
    visi();
    transitionNight();
    revProjects();
    callSect3Animcation();
});

window.addEventListener("load", function(){
    addThingsOnLoad();
});

function addThingsOnLoad(){
    document.querySelector("section:nth-child(1)").id = "home_sect1";
}

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


function transitionNight(){
    if (headPos < 210){
        document.querySelector("#sun").style.opacity = "1";
        document.querySelector("section:nth-child(1)").id = "home_sect1";
        document.querySelector("section:nth-child(2)").id = "home_sect2";
        document.querySelector("#introParagraph").style.color = "white";
    }
    if (headPos > 210){
        document.querySelector("#sun").style.opacity = "0";
        document.querySelector("section:nth-child(1)").id = "home_sect1-change";
        document.querySelector("section:nth-child(2)").id = "home_sect2-change";
        document.querySelector("#introParagraph").style.color = "#f8c4cc";
    }

}

// dialog

function revProjects(){
    if (headPos > 525){
        document.querySelector(".projectsPopup").classList.add("projectsPopup-show");
    }
}

function callSect3Animcation(){
    if (headPos > 1500){
        document.querySelector(".steveFall").classList.add("steveFallAnimation");
    }
}
