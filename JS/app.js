var element = document.getElementsByClassName("fixed")
window.addEventListener('scroll', stk);

function stk(){
    const headerPos = window.scrollY;
            if (headerPos < 527) {
                document.querySelector("header").classList.replace("fixed", "stick");
            }
            if (headerPos > 527) {
                document.querySelector("header").classList.replace("stick", "fixed");
            } 
            
};
        