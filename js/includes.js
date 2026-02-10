async function inject(selector, url) {
    const host = document.querySelector(selector);
    if (!host) return;

    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
    host.innerHTML = await res.text();
}

function setActiveNav() {
    const path = window.location.pathname;
    const current =
        path.endsWith("/privacy.html") ? "privacy" :
            path.endsWith("/terms.html") ? "terms" :
                "";

    if (!current) return;

    document.querySelectorAll(`[data-nav="${current}"]`).forEach(a => {
        a.classList.add("text-yahoo", "font-semibold");
        a.classList.remove("hover:text-yahoo");
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        await inject("#site-navbar", "/partials/navbar.html");
        await inject("#site-footer", "/partials/footer.html");

        // dopo che l'HTML è stato iniettato
        setActiveNav();

        // evento custom per inizializzare il burger menu nel main.js
        document.dispatchEvent(new Event("partials:loaded"));
    } catch (err) {
        console.error(err);
    }
});