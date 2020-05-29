const main_nav = document.getElementById('main-nav');
const mobileBtn = document.getElementById('mobile-button');
const mobileBtnIcon = document.querySelector('.mobile-button__icon');
const navLogo = document.querySelector('.main-nav__logo');
const navList = document.querySelector('.main-nav__list');
const headerEl = document.querySelector('header');
const contactEl = document.getElementById('contact');
const headerBottom = headerEl.offsetTop + headerEl.clientHeight - 50;
let position = window.scrollY; // scroll position on the page
let scrolling = true; // flag used to prevent from firing 'scroll' event when resizing window
let previousScroll = 0; // this variable saves the position on page after last scroll event

// Display mobile nav button and mobile nav CSS styles on smaller screens
function toggleMobileNav() {
    if(window.innerWidth <= 700) {
        mainNavTransitionOFF();
        // Delete sticky-nav styles if present
        if(main_nav.classList.contains('sticky-nav', 'shown'))
            main_nav.classList.remove('sticky-nav', 'shown');
        // Add mobile-nav styles
        main_nav.classList.add('mobile-nav');
        // Add mobile-nav logo styles
        navLogo.setAttribute('src', 'resources/img/logo-orange.svg');
        //Prevent the blink of mobile nav on load
        setTimeout(() => mainNavTransitionON(), 300);
    } else {
        if(position <= headerBottom)
            main_nav.className = 'main-nav';
        else
            main_nav.className = 'main-nav sticky-nav';
            navLogo.setAttribute('src', 'resources/img/logo-black.svg');
    }
};

// Change the color of mobile nav button depending on position on page
function changeMobileBtnColor() {
    position = window.scrollY; 
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

function mainNavTransitionON() {
    main_nav.style.transition = 'transform .3s';
};

function mainNavTransitionOFF() {
    main_nav.style.transition = 'none';
};

// Display sticky nav when below header and scrolling upwards
function showStickyNav() {
    // 'scrolling' indicates that window is not resized but really scrolled
    if(scrolling) {
        position = window.scrollY;
        // Show sticky nav only below header and on screens bigger than 700px
        if(position > headerBottom  && window.innerWidth > 700) {
            if(!main_nav.classList.contains('sticky-nav'))
                main_nav.classList.add('sticky-nav');
    
            // Prevent the blink of sticky nav when its class is added
            setTimeout(() => mainNavTransitionON(), 300);
    
            // If scrolling up show sticky nav 
            if(position < previousScroll)
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
                    mainNavTransitionOFF();
                }, 500);   
            }      
        }
        // Update the previous scroll variable for next event
        previousScroll = position;
    }
    
};

//Event listeners

window.addEventListener('DOMContentLoaded', () => {
    toggleMobileNav();
    resetNavAnimations();
});

window.addEventListener('resize', () => {
    // Dont fire scroll event when window is being resized (prevents blinking of sticky nav)
    scrolling = false;
    // Check if mobile nav button and mobile nav styles should be turned on (from 700px width down)
    toggleMobileNav();
    // After resizing watch for scroll event again
    setTimeout(() => scrolling = true, 700);
});

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

