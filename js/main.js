let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar")
menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}
/*..................................................................... */
var swiper = new Swiper(".portfolio-slider", {
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        490: {
          slidesPerView: 2.2,
        },
        768: {
          slidesPerView: 3.2,
        },
        1024: {
          slidesPerView: 4.2,
        },
    },
});