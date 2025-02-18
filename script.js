// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check local storage for theme preference
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";
    }
});

// Scroll animations
const sections = document.querySelectorAll(".fade-in");

const fadeInOnScroll = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();
