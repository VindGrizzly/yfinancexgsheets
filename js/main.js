// MOBILE MENU MANAGEMENT
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


// COOKIES MANAGEMENT
function initCookieBanner() {
    const banner = document.getElementById("cookie-banner");
    if (!banner) return;

    const consent = localStorage.getItem("cookie-consent");

    // se l'utente ha già scelto → non mostrare
    if (consent) return;

    banner.classList.remove("hidden");

    const acceptBtn = document.getElementById("cookie-accept");
    const rejectBtn = document.getElementById("cookie-reject");

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookie-consent", "accepted");
        banner.classList.add("hidden");
    });

    rejectBtn.addEventListener("click", () => {
        localStorage.setItem("cookie-consent", "rejected");
        banner.classList.add("hidden");
    });
}

document.addEventListener("DOMContentLoaded", initCookieBanner);
document.addEventListener("partials:loaded", initCookieBanner);