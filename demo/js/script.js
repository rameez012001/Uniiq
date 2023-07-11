  // pre-loader percentage value incrementor.
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
  // pre-loader function
    setTimeout(() => {
      document.getElementById("pre-loader").classList.add("off");
    }, 5800);
    setTimeout(() => {
      document.querySelector('.d12').classList.add('go-up');
      document.querySelector('.pre-footer p').classList.add("go-up");
  }, 3500);
    
    setInterval(() => {
        $('#lander').css('display', 'block');
        $('#home').css('display', 'block');
    }, 4000);

$(document).ready(function() {
  // STRICT FUNCTION //
  (function($) {
      "use strict";
      // AOS initialization
      $(document).ready(()=>{AOS.init();})
      $(document).on('scroll',()=>{AOS.refresh();});

      // FUNCTION DEFINITION
      // mouse change on images in home-page.
      function mousemove() {
        var y = document.querySelectorAll('.light-cursor');
        $(y).mouseenter(() => {
          $('.cursor').addClass('light-mode');
        }).mouseleave(() => {
          $('.cursor').removeClass('light-mode');
        });
      }
      //Function call
      mousemove();
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