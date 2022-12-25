// MENU MOBILE BUTTON
const menuBtn = document.querySelector('.menu-btn')
const navlink = document.querySelector('.nav-links')

menuBtn.addEventListener('click', () => {
    navlink.classList.toggle('mobile-menu')
})

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})