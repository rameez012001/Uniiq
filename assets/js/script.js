window.addEventListener('load', function() {
  let preLoaderElement = document.getElementById("pre-loader");
  let pageLoaderElement = document.getElementById("page-loader");
  const isFirstVisit = !localStorage.getItem('hasVisited');
  if(preLoaderElement){
    if(isFirstVisit){
      console.log('first visit');
      load(25)
      setTimeout(()=>{
        $('.pre-loader').addClass('off');
        $('.item-wrapper').addClass('entry-animation');
      },3200)
    }else{
      console.log('last visit');
      $('#percentage').text('100%');
      $('.progress-inner').css('width','100%');
      preAnimation();
      $('.pre-loader').addClass('off');
      $('.item-wrapper').addClass('entry-animation');
    }
  }
  if(pageLoaderElement){
    if(isFirstVisit){
      setTimeout(()=>{
        $('.item-wrapper').addClass('entry-animation');
        $('.page-loader').addClass('off');
      },500);console.log('first visit');
    }else{
      consol.log('last visit');
      $('.page-loader').addClass('off');
    }
  }
});
function preAnimation(){
    let loadText = document.querySelector('.d12');
    let footerText = document.querySelector('.pre-footer p');

    loadText.animate(
      [
        { transform: 'translateY(0%)' },
        { transform: 'translateY(-120%)' }
      ],
      {
        duration: 500,
        easing: 'ease-in-out',
        fill: 'forwards'
      }
    );
    footerText.animate(
      [
        {opacity:'1'},
        {opacity:'0'}
      ],
      {
        duration: 500,
        easing: 'ease-in-out',
        fill: 'forwards'
      }
    )
}
function load(time) {
  let percentage = document.querySelector('#percentage');
  let value = 0;
  percentage.innerHTML = value + '%';
  setInterval(() => {
    if (value < 100) {
      value++;
      percentage.innerHTML = value+'%';
      document.querySelector('.progress-inner').style.width = value + '%';
      if(value == 100){
        preAnimation();
      }
    }
  },time); 
}

$(document).ready(function() {
    if ($('.owl-carousel').length) {
    $('.owl-carousel').owlCarousel({
      loop: true,
      items: 1,
      autoWidth: true,
      margin: 10,
      center: true,
      smartSpeed: 1500,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        1000: {
          items: 2,
          margin:94
        },
      }
    });
  }
  (function($) {
      "use strict";

      $(document).ready(()=>{AOS.init({once:'true'});})
      $(document).on('scroll',()=>{AOS.refresh();});
      $(document).on('scroll', skillFill);


      function mousemove() {
        var onImg = document.querySelectorAll('#home .item-wrapper .items .image');
        $(onImg).mouseenter(() => {
          $('.cursor').addClass('onimg');
          $('.cursor').addClass('vector');
          $('.vector').css('background-position','center')
          $('.dot').addClass('inactive');
        }).mouseleave(() => {
          $('.cursor').removeClass('onimg');
          $('.cursor').removeClass('vector');
          $('.dot').removeClass('inactive');
        });
      }

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

      function animateBackground() {
        let elements = document.querySelectorAll('.circle-progress');
        elements.forEach(function(element) {
          let circleValue = element.dataset.circle;
          let color = element.dataset.color;
          let color1 = element.dataset.color1;
          let circleDegrees = (circleValue / 100) * 360;
          $({ angleValue: 0 }).delay(0).animate({ angleValue: circleDegrees }, {
            duration: 1000,
            easing: 'linear',
            step: function() {
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
        // $(document).ready(() => {
        //   if ($('.owl-carousel').length) {
        //     $('.owl-carousel').owlCarousel({
        //       loop: true,
        //       items: 1,
        //       autoWidth: true,
        //       margin: 10,
        //       center: true,
        //       smartSpeed: 1500,
        //       autoplay: true,
        //       autoplayTimeout: 3000,
        //       autoplayHoverPause: true,
        //       responsive: {
        //         1000: {
        //           items: 2,
        //           margin:94
        //         },
        //       }
        //     });
        //   }
        // });
      
      mousemove();
      menuControl();
      animateBackground();
      type();

  })(jQuery);


    $(document).mousemove(function(e) {
      var roundCursor = $('.cursor');
      var dot = $('.dot');
      roundCursor.css({ top: e.clientY, left: e.clientX });
      dot.css({ top: e.clientY, left: e.clientX });
    });
});