function load() {
  let percentage = document.querySelector('#percentage');
  let value = 0;
  percentage.innerHTML = value + '%';

  setInterval(() => {

    if (value < 100) {
      value++;
      percentage.innerHTML = value+'%';
      document.querySelector('.progress-inner').style.width = value + '%';

      if(value == 100){
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
    } else {
      clearInterval(interval); 
    }
  },1); 
}load();

window.addEventListener('load', function() {
  // Check if this is the first visit by looking for a flag in localStorage
  const isFirstVisit = !localStorage.getItem('hasVisited');

  if (isFirstVisit) {
    // It's the first visit, set the flag and execute the setTimeout
    localStorage.setItem('hasVisited', true);
    setTimeout(() => {
      $('.pre-loader').addClass('off');
    }, 2200);
  } else {
    // Not the first visit, remove the pre-loader immediately
    $('#percentage').text('100%');
    $('.pre-loader').addClass('off');
  }
});
  

$(document).ready(function() {
(function($) {
    "use strict";

    $(document).ready(()=>{AOS.init({once:'true'});})
    $(document).on('scroll',()=>{AOS.refresh();});
    function mousemove() {
      var y = document.querySelectorAll('.light-cursor');
      $(y).mouseenter(() => {
        $('.cursor').addClass('light-mode');
      }).mouseleave(() => {
        $('.cursor').removeClass('light-mode');
      });
    }
    mousemove();
})(jQuery);

  $(document).mousemove(function(e) {
    var roundCursor = $('.cursor');
    var dot = $('.dot');
    roundCursor.css({ top: e.clientY, left: e.clientX });
    dot.css({ top: e.clientY, left: e.clientX });
  });
});