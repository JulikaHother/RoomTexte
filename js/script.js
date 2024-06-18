// let typewriters = {};
count = 0;

// // List of allowed IDs for the typewriter effect
// const allowedTypewriterIds = ['about-text', 'textHonich', 'textJohannes', 'textHeidenord', 'textSelma'];

// function applyTypewriterEffect(elementId, pauseDuration = 10, typeSpeed = 100, deleteSpeed = 50) {
//   // Check if the elementId is in the allowed list
//   if (!allowedTypewriterIds.includes(elementId)) {
//     return;
//   }

//   var element = document.getElementById(elementId);
//   var html = element.innerHTML;

//   // Clean up the HTML content by replacing multiple spaces and line breaks with a single space
//   var cleanedHtml = html.replace(/\s*(<br\s*\/?>)\s*/gi, '$1').replace(/\s\s+/g, ' ').trim();

//   // Initialize the Typewriter effect with customized speeds
//   if (!typewriters[elementId]) {
//     var typewriter = new Typewriter(element, {
//       loop: false,
//       delay: typeSpeed,
//       deleteSpeed: deleteSpeed
//     });

//     typewriter.pauseFor(pauseDuration)
//       .typeString(cleanedHtml)
//       .start();

//     typewriters[elementId] = typewriter;
//   } else {
//     typewriters[elementId].start();
//   }
// }

// function pauseTypewriterEffect(elementId) {
//   if (typewriters[elementId]) {
//     typewriters[elementId].pause();
//   }
// }



// Define an array of string arrays
const stringSets = [
  [
    '<span class="center"><br><br><br>–Meine Oma stirbt und ich erbe nichts</span><span class="center"><br><br><br><br> –Ihre Großmütter sterben und sie erben nichts</span><br><br><br><br><br><br><br><span class="rechtsbuendig kursiv">–außer</span>'
  ],
  [
    'Wie ich mit 15 das erste Mal Koks vom Treppengeländer eines Berliner Hausflurs ziehe, der Bass wummert durch die Wände, ich schwitze unter meiner Lederjacke.<br>',
    'Wie ich am Morgen danach auf dem Friedhof anhalte und spüre, dass etwas verändert ist.'
  ],
  [
    '2006, das Land feiert die Fußball Weltmeisterschaft der Männer.<br>',
    '2021 und die fußballspielenden Frauen versuchen aus Afghanistan zu flüchten.'
  ]
];

// Initialize Typed.js for each text container
new Typed('#element1', {
  strings: stringSets[0],
  typeSpeed: 50,
  backSpeed: 0,
  startDelay: 500,
  backDelay: 500,
  showCursor: false,
  loop: false,
});

new Typed('#element2', {
  strings: stringSets[1],
  typeSpeed: 50,
  backSpeed: 0,
  startDelay: 500,
  backDelay: 500,
  showCursor: false,
  loop: false,
});

new Typed('#element3', {
  strings: stringSets[2],
  typeSpeed: 50,
  backSpeed: 0,
  startDelay: 500,
  backDelay: 500,
  showCursor: false,
  loop: false,
});



$(document).ready(function () {
  const documentWidth = $(document).width();

  function checkWidth() {
    const windowWidth = $(window).width();
    console.log('Window width:', windowWidth);

    if (windowWidth <= documentWidth) {

      $('body').addClass('halb-0');
      $('body').removeClass('halb-3 halb-2 halb');

      $('.halb-0').show();

      $('.halb-3, .halb-2, .halb').hide();
      $('.raumblau').css('background-color', '');
      $('.raumbraun').css('background-color', '');
      $('.raumorange').css('background-color', '');
      $('.raumlila').css('background-color', '');




      // Apply typewriter effect when this condition is met
      // applyTypewriterEffect('about-text');
    } else {
      $('body').removeClass('halb-0');
      $('.halb-0').hide();
      // pauseTypewriterEffect('about-text');
    }

    if (windowWidth <= documentWidth / 1.1 || windowWidth >= documentWidth * 1.1) {
      $('body').addClass('halb-3');

      $('body').removeClass('halb-2 halb halb-0');
      $('.halb-3').show();

      $('.halb-2, .halb, .halb-0').hide();
      $('.raumblau').css('background-color', 'rgba(0, 140, 255, 0.41)');
      $('.raumbraun').css('background-color', '');
      $('.raumorange').css('background-color', '');
      $('.raumlila').css('background-color', '');

      // const children = $('.rand');
      // console.log(children);
      // const randElm = children[(Math.random() * children.length)];
      // randElm.show();
      count++;
      if (count == 1) {
        console.log(count)
        var rndInt = Math.floor(Math.random() * 2) + 1;
        var newww = '.rand' + rndInt;
        $('.rand').hide()
        $(newww).show();
        setTimeout(function () {
          count = 0;
        }, 1000)
      }





      // for (let a = 0; a < children.length; a++) {
      //   const element = children[a];
      //   element.computedStyleMap.display = 'none';
      // }

      // randElm.style.display = 'block';



      // Apply typewriter effect when this condition is met
      // applyTypewriterEffect('textHonich');
    } else {
      $('body').removeClass('halb-3');
      $('.halb-3').hide();
      $('.raumblau').css('background-color', '');
      // pauseTypewriterEffect('textHonich');
    }

    if (windowWidth <= documentWidth / 1.5 || windowWidth >= documentWidth * 1.5) {
      $('body').addClass('halb-2');
      $('body').removeClass('halb-3 halb halb-0');
      $('.halb-2').show();
      $('.halb-3, .halb, .halb-0').hide();
      $('.raumblau').css('background-color', '');
      $('.raumbraun').css('background-color', 'rgb(179, 134, 105, 0.41)');
      $('.raumorange').css('background-color', '');
      $('.raumlila').css('background-color', '');


      // Apply typewriter effect when this condition is met
      // applyTypewriterEffect('textJohannes');
    } else {
      $('body').removeClass('halb-2');
      $('.halb-2').hide();
      $('.raumbraun').css('background-color', '');
      // pauseTypewriterEffect('textJohannes');
    }

    if (windowWidth <= documentWidth / 2 || windowWidth >= documentWidth * 2) {
      $('body').addClass('halb');
      $('body').removeClass('halb-3 halb-2 halb-0');
      $('.halb').show();
      $('.halb-2, .halb-3, .halb-0').hide();
      $('.raumblau').css('background-color', '');
      $('.raumbraun').css('background-color', '');
      $('.raumlila').css('background-color', '');
      $('.raumorange').css('background-color', 'rgb(255, 110, 77, 0.41)');

      // Apply typewriter effect when this condition is met
      // applyTypewriterEffect('textHeidenord');
    } else {
      $('body').removeClass('halb');
      $('.halb').hide();
      $('.raumorange').css('background-color', '');
      // pauseTypewriterEffect('textHeidenord');
    }
  }

  // Initial check
  checkWidth();

  const documentHeight = $(document).height();
  console.log('Document height (initial):', documentHeight);

  function checkHeight() {
    const windowHeight = $(window).height();
    console.log('Window height:', windowHeight);

    if (windowHeight <= documentHeight / 1.5) {
      console.log('documentHeight / 1.5');
      $('body').addClass('hoehe1');
      $('body').removeClass('halb-0 halb-2 halb-3 halb hoehe2 hoehe3');
      $('.hoehe1').show();
      $('.halb-0, .halb-2, .halb-3, .halb, .hoehe2, .hoehe3').hide();
      $('.raumblau').css('background-color', '');
      $('.raumbraun').css('background-color', '');
      $('.raumorange').css('background-color', '');
      $('.raumlila').css('background-color', 'rgb(220, 153, 251, 0.6)');

      // Apply typewriter effect when this condition is met
      // applyTypewriterEffect('textSelma');
    } else {
      console.log('NOT documentHeight / 1.5');
      $('body').removeClass('hoehe1');
      $('.hoehe1').hide();
      $('.raumlila').css('background-color', '');
      // pauseTypewriterEffect('textSelma');
    }
  }

  // Initial check
  checkHeight();

  var prevW = -1, prevH = -1;
  prevW = $(window).width();
  prevH = $(window).height();

  $(window).resize(function () {
    var widthChanged = false, heightChanged = false;
    if ($(window).width() != prevW) {
      widthChanged = true;
      checkWidth();
    }
    if ($(window).height() != prevH) {
      heightChanged = true;
      checkHeight();
    }

    prevW = $(window).width();
    prevH = $(window).height();
  });
});
