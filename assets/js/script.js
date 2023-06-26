(function($) {
    "use strict";
    menuControl();
    function menuControl() {
        $(document).ready(function() {
            $(document).on('click', '.menu-icon', function() {
                $(this).toggleClass('active');
                $('.left-sidebar').toggleClass('active')
                $('.about-text').toggleClass('active')
                $('#logo').toggleClass('inactive')
                $('.item-wrapper').toggleClass('inactive')
                $('footer').toggleClass('inactive')
            });
        });
    }
})(jQuery);
$(document).ready(()=>{
    $('.owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        nav:true,
        items:3,
        margin:94,
        autoWidth:true,
        center:true,
        smartSpeed:1500,
        autoplay:true,
        autoplayTimeout:3000,
    });
})
$(document).mousemove(function(e) {
    var roundCursor = $('.cursor');
    roundCursor.css({ top: e.clientY, left: e.clientX });
  });
AOS.init();