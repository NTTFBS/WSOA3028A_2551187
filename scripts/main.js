import { initialise, addFooter } from "./menu.js";
initialise("Home");
addFooter();

document.addEventListener('DOMContentLoaded', (event) => {
    const headings = document.querySelectorAll('h1');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'typing 3s steps(30, end), blink-caret .5s step-end infinite';
            } else {
                entry.target.style.animation = '';
            }
        });
    });

    headings.forEach((heading) => {
        observer.observe(heading);
    });
});