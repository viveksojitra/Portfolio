var header = document.querySelector("header");
var logoPrimary = document.querySelector("logo-primary");
var logoSecondary = document.querySelector("logo-secondary");

// Header
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// FancyBox
Fancybox.bind("[data-fancybox]", {
});