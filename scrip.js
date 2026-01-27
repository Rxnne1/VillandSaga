const toggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});
