let sections = document.querySelectorAll('.section');
window.addEventListener('scroll', function() {
    sections.forEach(function(section, index) {
        section.style.setProperty('--i', index);
        let sectionTop = section.getBoundingClientRect().top;
        let windowInnerHeight = window.innerHeight;
        if (sectionTop < windowInnerHeight) {
            section.classList.add('slide-up');
        }
    });
});