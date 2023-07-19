// function load() {
//   let percentage = document.querySelector('#percentage');
//   let value = 0;
//   percentage.innerHTML = value + '%';

//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', 'your_content_url', true);
//   xhr.onprogress = function(event) {
//     if (event.lengthComputable) {
//       value = (event.loaded / event.total) * 100;
//       percentage.innerHTML = Math.floor(value) + '%';
//       document.querySelector('.progress-inner').style.width = value + '%';
//       if(value == 100){
//         let loadText = document.querySelector('.d12');
//         let footerText = document.querySelector('.pre-footer p');
//         loadText.animate(
//           [
//             { transform: 'translateY(0%)' },
//             { transform: 'translateY(-120%)' }
//           ],
//           {
//             duration: 500,
//             easing: 'ease-in-out',
//             fill: 'forwards'
//           }
//         );
//         // to make the 'footer text' fade-away.
//         footerText.animate(
//           [
//             { opacity: '1' },
//             { opacity: '0' }
//           ],
//           {
//             duration: 500,
//             easing: 'ease-in-out',
//             fill: 'forwards'
//           }
//         );
//       }
//     }
//   };

//   xhr.send();
// }

// load();


// document.addEventListener('DOMContentLoaded', function() {
//   // load();
//   $('.pre-loader').fadeTo(1000, 0);

// });

function load() {
  let percentage = document.querySelector('#percentage');
  let value = 0;
  percentage.innerHTML = value + '%';

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'your_content_url', true);
  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      value = (event.loaded / event.total) * 100;
      updateProgressBar(value);
      console.log(value);
    }
  };

  xhr.send();
}

function updateProgressBar(value) {
  let percentage = document.querySelector('#percentage');
  let progressBar = document.querySelector('.progress-inner');
  percentage.innerHTML = Math.floor(value) + '%';
  progressBar.style.width = value + '%';

  if (value == 100) {
    clearInterval(progressInterval);
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
    // to make the 'footer text' fade-away.
    footerText.animate(
      [
        { opacity: '1' },
        { opacity: '0' }
      ],
      {
        duration: 500,
        easing: 'ease-in-out',
        fill: 'forwards'
      }
    );
  }
}

// Set the interval time (in milliseconds) for updating the progress bar
const intervalTime = 100;

// Call the load() function to start the process


// Start the iterative updates using setInterval
const progressInterval = setInterval(load, intervalTime);

window.addEventListener('load', function() {
  load();
  $('.pre-loader').addClass('off');
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