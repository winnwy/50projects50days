const btn_off = document.getElementById("menu-off");
const btn_on = document.getElementById("menu-on");
const main_container = document.querySelector(".main-container");
const navbar = document.querySelector(".navbar");
const circle = document.querySelector(".circle");

btn_off.addEventListener("click", () => {
  navbar.classList.add("show-navbar");
  circle.classList.add("show-navbar");
  main_container.classList.add("show-navbar");
});

btn_on.addEventListener("click", () => {
  navbar.classList.remove("show-navbar");
  circle.classList.remove("show-navbar");
  main_container.classList.remove("show-navbar");
});
