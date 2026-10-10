
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-link");

// Open or close the mobile menu
function toggleMenu() {
    const isOpen = hamburger.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
}

// Update the menu and button state
function setMenuState(isOpen) {
    navLinks.classList.toggle("is-open", isOpen);
    hamburger.classList.toggle("is-open", isOpen);

    hamburger.setAttribute("aria-expanded", String(isOpen));

    hamburger.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

// Hamburger button click
hamburger.addEventListener("click", toggleMenu);

// Close menu when a navigation link is selected
links.forEach(function (link) {
    link.addEventListener("click", function () {
        setMenuState(false);

        // Highlight the selected navigation link
        links.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

// Close menu when Escape is pressed
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        setMenuState(false);
    }
});

// Close mobile menu when returning to desktop size
window.addEventListener("resize", function () {
    if (window.innerWidth > 760) {
        setMenuState(false);
    }
});
