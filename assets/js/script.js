$(document).ready(function() {
    // strict function
    (function($) {
        "use strict";
        function menuControl() {
            $(document).on('click', '.menu-icon', function() {
                $(this).toggleClass('active');
                $('.left-sidebar').toggleClass('active');
                $('.about-text').toggleClass('active');
                $('#logo').toggleClass('inactive');
                $('.item-wrapper').toggleClass('inactive');
                $('footer').toggleClass('inactive');
            });
        }
        function skillFill() {
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
          
            $('.skill-fill:not(.animation-done)').each(function () {
              var progressBar = $(this);
              var progressFill = progressBar.data('fill');
              var progressBarTop = progressBar.offset().top;
          
              if (progressBarTop <= viewportBottom) {
                progressBar.animate({ width: progressFill },1, function() {
                  $(this).addClass('animation-done');
                });
              }
            });
          }

        function initializeCarousel(){
          $(document).ready(()=>{
            $('.owl-carousel').owlCarousel({
                loop:true,
                items:0,
                autoWidth:true,
                margin:10,
                center:true,
                smartSpeed:1500,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause: true,
                responsive:{
                  0:{
                    items:1
                  },
                  1100:{
                    items:3,
                    margin:94,
                  }
                }
            });
        })
        }
          $(document).on('scroll', skillFill);
          $(window).resize(()=>{initializeCarousel();})
        menuControl();
        initializeCarousel();
    })(jQuery);
    
    // normal jquery
    
    $(document).mousemove(function(e) {
        var roundCursor = $('.cursor');
        var dot = $('.dot');
        roundCursor.css({ top: e.clientY, left: e.clientX });
        dot.css({ top: e.clientY, left: e.clientX });
      });
});
$(document).ready(()=>{AOS.init();})
$(document).on('scroll',()=>{AOS.refresh();})