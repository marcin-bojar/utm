$(document).ready(function() {
    var previousScroll = 0,
        headerBottom = $('header').scrollTop() + ($('header').height() - 50),
        contactTop = $('.section-contact').scrollTop();

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if(currentScroll > headerBottom) {
            if (currentScroll < previousScroll) {
                $('.main-nav').addClass('sticky-nav');
                $('.sticky-nav').removeClass('main-nav');
            } else {
                $('.sticky-nav').addClass('main-nav');
             $('.main-nav').removeClass('sticky-nav'); 
            }
        } else {
            $('.sticky-nav').addClass('main-nav');
             $('.main-nav').removeClass('sticky-nav');  
             $('.main-nav__list').css('animation', 'none');
        }

        previousScroll = currentScroll;
    });

        
    

});
