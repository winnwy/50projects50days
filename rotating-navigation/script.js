const btn_off = document.getElementById("menu-off");
const btn_on = document.getElementById("menu-on");
const main_container = document.querySelector(".main-container");
const nav_container = document.querySelector(".nav-container");
const navbar = document.querySelector(".navbar");

btn_off.addEventListener("click", () => {
    btn_on.style.display = "block";
    btn_off.style.display = "None";
    main_container.style.transform = "Rotate(-20deg)";
    navbar.style.transform = "translateX(0%)";
    // btn_off.style.transformOrigin = "top left";
    // btn_off.style.transform = "Rotate(20deg)"
})

btn_on.addEventListener("click", ()=> {
    btn_off.style.display = "block";
    btn_on.style.display="None";
    main_container.style.transform = "Rotate(0deg)"
    navbar.style.transform = "translateX(-100%)";
    console.log(navbar)
})
