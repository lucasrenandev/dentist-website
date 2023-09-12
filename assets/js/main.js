/* ===== Strict mode ===== */
"use strict"

/* ===== Responsive menu ===== */
const menuIcon = document.getElementById("menu-icon")
const navBar = document.getElementById("navbar")

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("open")
    this.classList.toggle("fa-times")
})

window.addEventListener("scroll", function() {
    navBar.classList.remove("open")
    menuIcon.classList.remove("fa-times")
})

/* ===== Swiper js ===== */
const swiper = new Swiper(".team-container", {
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});