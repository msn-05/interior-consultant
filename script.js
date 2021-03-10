const hamburger = document.querySelector(".nav_hamburger");
const links = document.querySelector(".nav_links");
const navClose = document.querySelector(".nav_close");

hamburger.addEventListener("click", () => {
  links.classList.toggle("nav_links--show");
});

navClose.addEventListener("click", () => {
  links.classList.toggle("nav_links--show");
});
