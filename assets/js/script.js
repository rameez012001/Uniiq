  // pre-loader percentage value incrementor.
  function load() {
    let percentage = document.querySelector('#percentage');
    let value = 1; 
    percentage.innerHTML = value;
  
    let interval = setInterval(() => {
      if (value < 100) {
        value++;
        percentage.innerHTML = value+'%';
      } else {
        clearInterval(interval); 
      }
    },30);   
  }
  // pre-loader function
    setTimeout(() => {
      document.getElementById("pre-loader").classList.add("off");
    }, 5800);
    setTimeout(() => {
      document.querySelector('.d12').classList.add('go-up');
      document.querySelector('.pre-footer p').classList.add("go-up");
  }, 3500);
  setTimeout(() => {
    document.getElementById("page-loader").classList.add("off");
  }, 1700);


$(document).ready(function() {
  // STRICT FUNCTION //
  (function($) {
      "use strict";

      // AOS initialization
      $(document).ready(()=>{AOS.init({once:'true'});})
      $(document).on('scroll',()=>{AOS.refresh();});

      // calling the skillFill function when mouse scroll
      $(document).on('scroll', skillFill);

      // FUNCTION DEFINITION
      // mouse change on images in home-page.
      function mousemove() {
        var x = document.querySelectorAll('#home .item-wrapper .items .image');
        var y = document.querySelectorAll('.light-cursor');
        $(x).mouseenter(() => {
          $('.cursor').addClass('onimg');
          $('.cursor').addClass('vector');
          $('.vector').css('background-position','center')
          $('.dot').addClass('inactive');
        }).mouseleave(() => {
          $('.cursor').removeClass('onimg');
          $('.cursor').removeClass('vector');
          $('.dot').removeClass('inactive');
        });
        $(y).mouseenter(() => {
          $('.cursor').addClass('light-mode');
        }).mouseleave(() => {
          $('.cursor').removeClass('light-mode');
        });
      }

      // content appear when clicking menu icon.
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

      // skill page progress bar filling while scroll.
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

      function animateBackground() {
        let elements = document.querySelectorAll('.circle-progress');
        elements.forEach(function(element) {
          let circleValue = element.dataset.circle;
          let color = element.dataset.color;
          let color1 = element.dataset.color1;
          let circleDegrees = (circleValue / 100) * 360;
          // Animate the background
          $({ angleValue: 0 }).delay(0).animate({ angleValue: circleDegrees }, {
            duration: 1000,
            easing: 'linear',
            step: function() {
              // Update the background with the animated angle value
              element.style.background = `conic-gradient(${color1} ${this.angleValue}deg, ${color} 0deg)`;
            }
          });
        });
      }

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
      // owl carousel call function
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

      //Function call
      mousemove();
      menuControl();
      animateBackground();
      type();
      initializeCarousel();

      $(window).resize(()=>{initializeCarousel();});

  })(jQuery); ////////// STRICT FUNCTION ENDS HERE////////

    // normal jquery
    // to make the customize cursor follow mouse pointer
    $(document).mousemove(function(e) {
      var roundCursor = $('.cursor');
      var dot = $('.dot');
      roundCursor.css({ top: e.clientY, left: e.clientX });
      dot.css({ top: e.clientY, left: e.clientX });
    });
});





const lenis = new Lenis({
  duration:2,
  wheelMultiplier:2,
  smoothWheel:true,
  // easing:((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)))
});
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}  
requestAnimationFrame(raf)