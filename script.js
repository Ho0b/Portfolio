
const gallerySection = document.getElementById("sect-gal");
const workSection = document.getElementById("sect-work");
const aboutSection = document.getElementById("sect-about");
const skillsSection = document.getElementById("sect-skills");
const contactSection = document.getElementById("sect-contact");

const form = document.getElementById("form");

function switchSectionGallery(){
    gallerySection.classList.add("openedSection");
    workSection.classList.remove("openedSection");
    aboutSection.classList.remove("openedSection");
    skillsSection.classList.remove("openedSection");
    contactSection.classList.remove("openedSection");
}
function switchSectionWork(){
    gallerySection.classList.remove("openedSection");
    workSection.classList.add("openedSection");
    aboutSection.classList.remove("openedSection");
    skillsSection.classList.remove("openedSection");
    contactSection.classList.remove("openedSection");
}
function switchSectionAbout(){
    gallerySection.classList.remove("openedSection");
    workSection.classList.remove("openedSection");
    aboutSection.classList.add("openedSection");
    skillsSection.classList.remove("openedSection");
    contactSection.classList.remove("openedSection");
}
function switchSectionSkills(){
    gallerySection.classList.remove("openedSection");
    workSection.classList.remove("openedSection");
    aboutSection.classList.remove("openedSection");
    skillsSection.classList.add("openedSection");
    contactSection.classList.remove("openedSection");
}
function switchSectionContact(){
    gallerySection.classList.remove("openedSection");
    workSection.classList.remove("openedSection");
    aboutSection.classList.remove("openedSection");
    skillsSection.classList.remove("openedSection");
    contactSection.classList.add("openedSection");
}

window.onload = clearForms();

function clearForms(){
    document.querySelector("input#name").value = '';
    document.querySelector("input#email").value = '';
    document.querySelector("input#phone").value = '';
    document.querySelector("textarea#message").value = '';
}