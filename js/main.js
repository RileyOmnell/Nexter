const hamburger = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".navbar__list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("nav-btn--active");
    navMenu.classList.toggle("navbar__list--active");
}

const navLink = document.querySelectorAll(".navbar__item");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("nav-btn--active");
    navMenu.classList.remove("navbar__list--active");
}
