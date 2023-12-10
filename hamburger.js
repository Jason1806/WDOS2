document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu");
    const navLinks = document.querySelector(".nav-container");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});