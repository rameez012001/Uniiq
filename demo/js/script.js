  function load() {
    let x = document.querySelector('#percentage');
    let value = 1; 
    x.innerHTML = value;
  
    let interval = setInterval(() => {
      if (value < 100) {
        value++;
        x.innerHTML = value+'%';
      } else {
        clearInterval(interval); 
      }
    },30);   
  }
    setTimeout(() => {
      document.getElementById("pre-loader").classList.add("off");
    }, 5800);
    setTimeout(() => {
      document.querySelector('.d12').classList.add('go-up');
      document.querySelector('.pre-footer p').classList.add("go-up");
  }, 3500);
    

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