$(document).ready(function() {
    var previousScroll = 0,
        headerBottom = $('header').scrollTop() + ($('header').height() - 50),
        width = $(window).width();

        if (width <= 683) {
            $('.js--main-nav').css('display', 'none');
            $('.mobile-button__icon').css('display', 'block');
        } 
    
        $(window).resize(function() {
            if ($(window).width() <= 683) {
                $('.js--main-nav').css('display', 'none');
                $('.mobile-button__icon').css('animation', 'none');   
                $('.mobile-button__icon').css('display', 'block');
            } else {
                $('.js--main-nav').css('display', 'block');
                $('.main-nav__list').css('animation', 'none');
                $('.mobile-button__icon').css('display', 'none');
            }
        });
      
    // STICKY NAV
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
       
        if(currentScroll > headerBottom) {
            if (currentScroll < previousScroll && width > 683) {
                $('.main-nav').addClass('sticky-nav');
                $('.sticky-nav').css("animation", "moveInUp .5s ease-out");    
            } else {   
                $('.sticky-nav').css("animation", "moveOutUp .5s ease-in");
                setTimeout(function() {
                    $('.main-nav').removeClass('sticky-nav');
                }, 450 );
            }
        } else {
            $('.sticky-nav').css("animation", "moveOutUp .5s ease-in");    
            setTimeout(function() {
                $('.main-nav').removeClass('sticky-nav');
                $('.main-nav').css("animation", "none");
                $('.main-nav__list').css('animation', 'none');
            }, 450 );      
        }  

        previousScroll = currentScroll;
    });

    // Mobile icon management
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop(),
            contactTop = $('.section-contact').offset().top - 30;
        if (currentScroll > headerBottom) {
            $('.mobile-button__icon').css('fill', '#EE5A24');
        } else {
            $('.mobile-button__icon').css('fill', '#fff');
        } 
        if (currentScroll > contactTop) {
            $('.mobile-button__icon').css('visibility', 'hidden'); 
       } else {
        $('.mobile-button__icon').css('visibility', 'visible');
       } 

    });


    $('.mobile-button__icon').click(function() {
        $('.mobile-nav').slideToggle(200);
        $('.mobile-button__icon').css('fill', '#EE5A24');    
});

    $('.mobile-nav').click(function() {
        $('.mobile-nav').slideToggle(200);
    });



    // IMAGE POPUP

    $('.photo').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {enabled:true}
    });


    var ua = navigator.userAgent;
    var pos = ua.indexOf("Edg/");
    var version = ua.substr(pos+4);
    var major = parseInt(version); 

    if (navigator.userAgent.match("Edge") || (navigator.userAgent.match("Edg") && major < 80) || navigator.userAgent.match ("Trident") || navigator.userAgent.match("MSIE")) {
        $('html').addClass('IE');
        $('.col-1-of-2').addClass('where__col'); 
    }

    
});
