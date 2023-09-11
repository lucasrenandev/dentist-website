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