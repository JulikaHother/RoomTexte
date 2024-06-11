// Typewriter effect initialization
function applyTypewriterEffect(elementId, pauseDuration = 10, typeSpeed = 100, deleteSpeed = 50) {
  var element = document.getElementById(elementId);
  var html = element.innerHTML;

  // Clean up the HTML content by replacing multiple spaces and line breaks with a single space
  var cleanedHtml = html.replace(/\s*(<br\s*\/?>)\s*/gi, '$1').replace(/\s\s+/g, ' ').trim();

  // Initialize the Typewriter effect with customized speeds
  var typewriter = new Typewriter(element, {
    loop: false,
    delay: typeSpeed,
    deleteSpeed: deleteSpeed
  });

  typewriter.pauseFor(pauseDuration)
    .typeString(cleanedHtml)
    .start();
}

// Apply the Typewriter effect to specified elements
applyTypewriterEffect('about-text');
applyTypewriterEffect('textHonich');
applyTypewriterEffect('textJohannes');
applyTypewriterEffect('textHeidenord');
applyTypewriterEffect('textSelma');



$(document).ready(function () {
  const documentWidth = $(document).width();
  // console.log('Document width (initial):', documentWidth);

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
    } else {
      $('body').removeClass('halb-0');
      $('.halb-0').hide();
    }

    if (windowWidth <= documentWidth / 1.1 || windowWidth >= documentWidth * 1.1) {
      // var random = '.rand' + (Math.floor(Math.random() * 3) + 1);
      // console.log(random)
      // $('.rand').hide();
      // $(random).show();
      $('body').addClass('halb-3');
      $('body').removeClass('halb-2 halb halb-0');
      $('.halb-3').show();
      $('.halb-2, .halb, .halb-0').hide();
      $('.raumblau').css('background-color', 'rgba(0, 140, 255, 0.41)');
      $('.raumbraun').css('background-color', '');
      $('.raumorange').css('background-color', '');
    } else {
      $('body').removeClass('halb-3');
      $('.halb-3').hide();
      $('.raumblau').css('background-color', '');
    }

    if (windowWidth <= documentWidth / 1.5 || windowWidth >= documentWidth * 1.5) {
      $('body').addClass('halb-2');
      $('body').removeClass('halb-3 halb halb-0');
      $('.halb-2').show();
      $('.halb-3, .halb, .halb-0').hide();
      $('.raumblau').css('background-color', '');
      $('.raumbraun').css('background-color', 'rgb(179, 134, 105, 0.41)');
      $('.raumorange').css('background-color', '');
    } else {
      $('body').removeClass('halb-2');
      $('.halb-2').hide();
      $('.raumbraun').css('background-color', '');
    }

    if (windowWidth <= documentWidth / 2 || windowWidth >= documentWidth * 2) {
      $('body').addClass('halb');
      $('body').removeClass('halb-3 halb-2 halb-0');
      $('.halb').show();
      $('.halb-2, .halb-3, .halb-0').hide();
      $('.raumblau').css('background-color', '');
      $('.raumbraun').css('background-color', '');
      $('.raumorange').css('background-color', 'rgb(255, 110, 77, 0.41)');
    } else {
      $('body').removeClass('halb');
      $('.halb').hide();
      $('.raumorange').css('background-color', '');
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
      console.log('documentHeight / 1.5')
      $('body').addClass('hoehe1');

      $('.hoehe1').show();
      $('.halb-0 .halb-2 .halb-3 .halb .hoehe2 .hoehe3').hide();
    } else {
      console.log('NOT documentHeight / 1.5')
      $('body').removeClass('hoehe1');
      $('.hoehe1').hide();
    }

    // if (windowHeight <= documentHeight / 2) {
    //   console.log('documentHeight / 2')
    //   $('body').addClass('hoehe2');

    //   $('.hoehe2').show();
    //   $('.halb-0 .halb-2 .halb-3 .halb .hoehe1 .hoehe3').hide();
    // } else {
    //   console.log('NOT documentHeight / 2')
    //   $('body').removeClass('hoehe2');
    //   $('.hoehe2').hide();
    // }

    $('body').removeClass();
    // $('.texte').hide();


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
      // console.log('width')
      checkWidth();
    }
    if ($(window).height() != prevH) {
      heightChanged = true;
      // console.log('height')
      checkHeight();
    }

    prevW = $(window).width();
    prevH = $(window).height();

  });
});