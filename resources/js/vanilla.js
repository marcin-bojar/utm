const main_nav = document.getElementById('main-nav');
const mobileBtn = document.getElementById('mobile-button');
const navLogo = document.querySelector('.main-nav__logo');

function toggleMobileNav() {
    if(window.innerWidth <= 700) {
        main_nav.classList.add('mobile-nav');
        navLogo.setAttribute('src', 'resources/img/logo-orange.svg');
        //Prevent the blink of mobile nav on load
        setTimeout( () => main_nav.style.transition = 'transform .3s', 300);
        
    } else {
        main_nav.className = 'main-nav';
        navLogo.setAttribute('src', 'resources/img/logo-black.svg');
        main_nav.style.transition = 'none';
    }
};

//Event listeners

//MOBILE NAV
window.addEventListener('DOMContentLoaded', () => {
    toggleMobileNav();
});

window.addEventListener('resize', () => {
    toggleMobileNav();
});

// Show mobile menu when mobile-nav btn clicked
mobileBtn.addEventListener('click', () => {
    main_nav.classList.toggle('shown');
});

// Close mobile menu when clicked anywhere on the menu
main_nav.addEventListener('click', () => {
    if(main_nav.classList.contains('mobile-nav')) {
        main_nav.classList.toggle('shown');
    }
});