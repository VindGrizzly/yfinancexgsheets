function initMobileMenu() {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!menuBtn || !mobileMenu) return;

    // stato coerente
    menuBtn.setAttribute("aria-expanded", mobileMenu.classList.contains("hidden") ? "false" : "true");

    menuBtn.addEventListener("click", () => {
        const isHidden = mobileMenu.classList.toggle("hidden");
        menuBtn.setAttribute("aria-expanded", isHidden ? "false" : "true");
    });
}

document.addEventListener("DOMContentLoaded", initMobileMenu);

// quando navbar/footer vengono iniettati
document.addEventListener("partials:loaded", initMobileMenu);