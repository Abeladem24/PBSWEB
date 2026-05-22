const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
}
