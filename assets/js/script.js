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
                type();
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
function type(){   
  var words = [
      `My name is Jason Williams and I am a photographer senior graphic designer from New York.`
  ];

  var delay = 2000; // Delay before typing each word (in milliseconds)
  var typingSpeed = 50; // Speed of typing animation (in milliseconds)

  var typingText = document.getElementById("typing-text");

  function typeWords(index) {
      if (index < words.length) {
          var word = words[index];
          var typedWord = "";
          var isDeleting = false;

          var interval = setInterval(function() {
              if (isDeleting) {
                  typedWord = word.substr(0, typedWord.length - 1);
              } else {
                  typedWord = word.substr(0, typedWord.length + 1);
              }

              typingText.innerHTML = typedWord;
              // typingText.innerHTML = typedWord.replace(/(^[^,]+)/, '<span style="color: red">$1</span>').replace(/(,)/, '<span style="color: red">$1</span>');



              if (!isDeleting && typedWord === word) {
                  isDeleting = true;
                  clearInterval(interval);
                  setTimeout(function() {
                      typeWords(index);
                  }, delay);
              } else if (isDeleting && typedWord === "") {
                  isDeleting = false;
                  clearInterval(interval);
                  setTimeout(function() {
                      typeWords(index + 1);
                  }, delay);
              }
          }, typingSpeed);
      }
  }

  typeWords(0);
}

function mousemove() {
  var x = document.querySelectorAll('#home .item-wrapper .items .image');
  $(x).mouseenter(() => {
    $('.cursor').addClass('onimg');
    $('.cursor').addClass('vector');
    $('.dot').addClass('inactive');
  }).mouseleave(() => {
    $('.cursor').removeClass('onimg');
    $('.cursor').removeClass('vector');
    $('.dot').removeClass('inactive');
  });
}

mousemove();

