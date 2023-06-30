(function($) {
    "use strict";
    menuControl();
    skillFill();
    

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
    function skillFill() {
        if ($('.skill-fill')[0]) {
            $(".skill-fill:not(.animation-done").each(function (i) {
                var top_of_object = $(this).offset().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                // if ((bottom_of_window - 70) > top_of_object) {
                    $(this).width($(this).data("fill"));
                    // $(this).addClass('animation-done');
                // }
            });
        }
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
        autoplayHoverPause: true
    });
})
$(document).mousemove(function(e) {
    var roundCursor = $('.cursor');
    roundCursor.css({ top: e.clientY, left: e.clientX });
  });
  AOS.init();