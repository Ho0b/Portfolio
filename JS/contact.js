// submitButton in Form fade

function smbtnFadeIn(){
    document.querySelector("#submitBtn").classList.add("fadeanimation-in");
    document.querySelector("#submitBtn").classList.remove("fadeanimation-out");
}
function smbtnFadeOut(){
    document.querySelector("#submitBtn").classList.remove("fadeanimation-in");
    document.querySelector("#submitBtn").classList.add("fadeanimation-out");
}

window.onload = function(){
    document.querySelector("input[type='name']").value = '';
    document.querySelector("input[type='email']").value = '';
    document.querySelector("textarea").value ='';
}