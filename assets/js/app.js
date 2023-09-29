let scrollpos = window.scrollY;
const navbar = document.querySelector('.navbar-list');

const addShadowOnScroll = () => navbar.classList.add('navbar-list-shadow');
const removeShadowOnScroll = () => navbar.classList.remove('navbar-list-shadow');

window.addEventListener('scroll', () => {
    scrollpos = window.scrollY;

    if(scrollpos >= 95) {
        addShadowOnScroll();
    } else {
        removeShadowOnScroll();
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach(el => observer.observe(el));