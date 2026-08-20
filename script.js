const btn= document.querySelector(".menu-button");
const closeBtn= document.querySelector(".close-button");
const menuIcon = document.querySelector(".ham-icon");
const mobileMenu=document.querySelector(".mobile-menu");
const hero=document.querySelector(".hero");
const grid = document.querySelector(".grid");
const stats= document.querySelector(".stats");
const articles = document.querySelectorAll(".stats article");
const footer = document.querySelector(".footer");
const charity = document.querySelector(".charity");
const page = document.querySelector(".page");

btn.addEventListener("click", () => {

    footer.classList.toggle("menu-active");
    stats.classList.toggle("menu-active");
    menuIcon.classList.toggle("hide");
    closeBtn.classList.toggle("show");
    mobileMenu.classList.toggle("show");
    grid.classList.toggle("menu-active");
    if (window.matchMedia("(min-width: 1024px)").matches) {
        articles[1].classList.toggle("hide");
        articles[3].classList.toggle("hide");
        charity.classList.toggle("hide");
        page.classList.toggle("menu-active");
        return;
        
        
    }
    
    hero.classList.toggle("hide");
   

});