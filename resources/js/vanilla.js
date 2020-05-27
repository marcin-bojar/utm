const main_nav = document.getElementById('main-nav');
const mobileBtn = document.getElementById('mobile-button');
const mobileBtnIcon = document.querySelector('.mobile-button__icon');
const navLogo = document.querySelector('.main-nav__logo');
const headerEl = document.querySelector('header');
const contactEl = document.getElementById('contact');

// Toggle mobile nav button and mobile nav CSS styles on smaller screens
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

// Change the color of mobile nav button depending on position on page
function changeMobileBtnColor() {
    const position = window.scrollY;
    const headerBottom = headerEl.offsetTop + headerEl.clientHeight - 40;
    const contactTop = contactEl.offsetTop - 40;

    if(position > headerBottom) 
        mobileBtnIcon.style.fill = '#EE5A24';
    else
        mobileBtnIcon.style.fill = '#fff';
    
    if(position > contactTop)
        mobileBtnIcon.style.fill = '#fff';
    
    if(position > contactTop + 100) 
        mobileBtnIcon.style.display = 'none';
    else
        mobileBtnIcon.style.display = 'block';
    
    if(main_nav.classList.contains('shown'))
        mobileBtnIcon.style.fill = '#EE5A24';
};

//Event listeners

//MOBILE NAV
window.addEventListener('DOMContentLoaded', () => toggleMobileNav() );
window.addEventListener('DOMContentLoaded', () => setTimeout(mobileBtnIcon.style.animation = '0', 2000));
window.addEventListener('resize', () => toggleMobileNav() );
//Adapt color of mobile button to background
window.addEventListener('scroll', changeMobileBtnColor);

// Show mobile menu when mobile-nav btn clicked
mobileBtn.addEventListener('click', () => {
    main_nav.classList.toggle('shown');
    changeMobileBtnColor();
});

// Close mobile menu when clicked anywhere on the menu
main_nav.addEventListener('click', () => {
    if(main_nav.classList.contains('mobile-nav'))
        main_nav.classList.toggle('shown');
});

