const main_nav = document.getElementById('main-nav');
const mobileBtn = document.getElementById('mobile-button');
const mobileBtnIcon = document.querySelector('.mobile-button__icon');
const navLogo = document.querySelector('.main-nav__logo');
const navList = document.querySelector('.main-nav__list');
const headerEl = document.querySelector('header');
const contactEl = document.getElementById('contact');
let previousScroll = 0;
const headerBottom = headerEl.offsetTop + headerEl.clientHeight - 40;

// Display mobile nav button and mobile nav CSS styles on smaller screens
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

// Function used to show nav animations only when page loaded, not after window resizing ect 
function resetNavAnimations() {
    setTimeout(() => {
        mobileBtnIcon.style.animation = '0';
        navList.style.animation = '0';
    }, 3000);      
};

// Display sticky nav when below header and scrolling upwards
function showStickyNav() {
    const currentScroll = window.scrollY;
   
    // Show sticky nav only below header and on screens bigger than 700px
    if(currentScroll > headerBottom  && window.innerWidth > 700) {
        if(!main_nav.classList.contains('sticky-nav'))
            main_nav.classList.add('sticky-nav');

        // Prevent the blink of sticky nav when its class is added
        setTimeout(() => main_nav.style.transition = 'transform .3s', 300);

        // If scrolling up show sticky nav 
        if(currentScroll < previousScroll)
            main_nav.classList.add('shown');
        // If scrolling down hide sticky nav
        else 
            main_nav.classList.remove('shown');

    // If not below header or screen smaller than 700px
    } else {
        main_nav.classList.remove('shown');
        if(main_nav.classList.contains('sticky-nav')) {
            // setTimeout to let the sticky nav hide smoothly when scrooling up onto header
            setTimeout( () => {
                main_nav.classList.remove('sticky-nav');
                main_nav.style.transition = 'none';
            }, 500);   
        }      
    }
    // Update the previous scroll variable for next event
    previousScroll = currentScroll;
};

//Event listeners

window.addEventListener('DOMContentLoaded', () => {
    toggleMobileNav();
    resetNavAnimations();
});

window.addEventListener('resize', toggleMobileNav);
//Adapt color of mobile button to background
window.addEventListener('scroll', () => {
    changeMobileBtnColor();
    showStickyNav();
});

// Show mobile menu when mobile-nav btn clicked
mobileBtn.addEventListener('click', () => {
    main_nav.classList.toggle('shown');
    changeMobileBtnColor();
});

// Close mobile menu when clicked anywhere on the menu
main_nav.addEventListener('click', () => {
    if(main_nav.classList.contains('mobile-nav')) {
        main_nav.classList.toggle('shown');
        changeMobileBtnColor();
    }
});

