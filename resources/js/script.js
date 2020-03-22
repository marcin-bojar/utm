$(document).ready(function() {
    var previousScroll = 0,
        headerBottom = $('header').scrollTop() + ($('header').height() - 50);
       
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if(currentScroll > headerBottom) {
            if (currentScroll < previousScroll) {
                $('.main-nav').addClass('sticky-nav');
                $('.sticky-nav').removeClass('main-nav');
                $('.sticky-nav').css("animation", "moveInUp .5s ease-out");
                
            } else {    
                $('.sticky-nav').addClass('main-nav');
                $('.sticky-nav').css("animation", "moveOutUp .5s ease-in");
                setTimeout(function() {
                    $('.main-nav').removeClass('sticky-nav');
                }, 450 );
            }
        } else {
             $('.sticky-nav').css("animation", "moveOutUp .5s ease-in");
             $('.sticky-nav').addClass('main-nav');
             $('.main-nav__list').css("animation", "none");
            setTimeout(function() {
                $('.main-nav').removeClass('sticky-nav');
               
            }, 450 );
        }  
             

        previousScroll = currentScroll;
    });


    $('.photo').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {enabled:true}
      });


      //this is not futureproof! all future versions of Edge will be excluded too...
      if (navigator.userAgent.match("Edg") || navigator.userAgent.match ("Trident") || navigator.userAgent.match("MSIE")) {
        $('html').addClass('IE');
        $('.col-1-of-2').addClass('where__col'); 
    }

    

});
