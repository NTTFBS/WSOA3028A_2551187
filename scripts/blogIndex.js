
let buttons = document.querySelectorAll('.main-button-blue');
buttons.forEach(function(button, index) {
    button.style.setProperty('--i', index);
});

window.addEventListener('scroll', function() {
    buttons.forEach(function(button) {
        let buttonTop = button.getBoundingClientRect().top;
        let windowInnerHeight = window.innerHeight;
        if (buttonTop < windowInnerHeight) {
            button.classList.add('slide-up');
        }
    });
});