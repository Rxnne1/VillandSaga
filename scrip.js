document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("menuToggle");
    const menu = document.querySelector(".menu");
    const dropdown = document.querySelector(".dropdown");

    if (!toggle || !menu) return;

    // abrir menú
    toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    // dropdown móvil
    if (dropdown) {
        dropdown.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle("open");
            }
        });
    }

    // cerrar al tocar link
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                menu.classList.remove("show");
                dropdown?.classList.remove("open");
            }
        });
    });

});
