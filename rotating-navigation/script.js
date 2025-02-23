const btn_off = document.getElementById("menu-off");
const btn_on = document.getElementById("menu-on");
const main_container = document.querySelector(".main-container");
const nav_container = document.querySelector(".nav-container");
const navbar = document.querySelector(".navbar");

btn_off.addEventListener("click", () => {
    btn_on.style.display = "block";
    btn_off.style.display = "none";
    navbar.classList.add("show-navbar")
    main_container.classList.add("show-navbar")
})

btn_on.addEventListener("click", ()=> {
    btn_off.style.display = "block";
    btn_on.style.display="none";
    navbar.classList.remove("show-navbar")
    main_container.classList.remove("show-navbar")
})
