// Typewriter effect initialization
function applyTypewriterEffect(elementId, pauseDuration = 10) {
  var element = document.getElementById(elementId);
  var html = element.innerHTML;

  // Clean up the HTML content by replacing multiple spaces and line breaks with a single space
  var cleanedHtml = html.replace(/\s*(<br\s*\/?>)\s*/gi, '$1').replace(/\s\s+/g, ' ').trim();

  // Initialize the Typewriter effect
  var typewriter = new Typewriter(element, { loop: false });

  typewriter.pauseFor(pauseDuration)
    .typeString(cleanedHtml)
    .start();
}

// Apply the Typewriter effect to specified elements
applyTypewriterEffect('about-text');
applyTypewriterEffect('typed-text-publi');
applyTypewriterEffect('typed-text');
applyTypewriterEffect('kontakt');





$(document).ready(function () {
  const documentWidth = $(document).width();
  console.log('Document width (initial):', documentWidth);

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

    if (windowWidth <= documentWidth / 1.1) {
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

    if (windowWidth <= documentWidth / 1.5) {
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

    if (windowWidth <= documentWidth / 2) {
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

  // Check width on window resize
  $(window).resize(function () {
    checkWidth();
  });

  const documentHeight = $(document).height();
  console.log('Document height (initial):', documentHeight);

  function checkHeight() {
    const windowHeight = $(window).height();
    console.log('Window height:', windowHeight);

    if (windowHeight <= documentHeight) {
      $('body').addClass('hoehe1');
      $('body').removeClass('hoehe2 hoehe3 hoehe4');
      $('.hoehe1').show();
      $('.hoehe2, .hoehe3, .hoehe4').hide();
    } else {
      $('body').removeClass('hoehe1');
      $('.hoehe1').hide();
    }

    if (windowHeight <= documentHeight / 1.2) {
      $('body').addClass('hoehe2');
      $('body').removeClass('hoehe1 hoehe3 hoehe4');
      $('.hoehe2').show();
      $('.hoehe1, .hoehe3, .hoehe4').hide();
    } else {
      $('body').removeClass('hoehe2');
      $('.hoehe2').hide();
    }

    if (windowHeight <= documentHeight / 1.5) {
      $('body').addClass('hoehe3');
      $('body').removeClass('hoehe1 hoehe2 hoehe4');
      $('.hoehe3').show();
      $('.hoehe1, .hoehe2, .hoehe4').hide();
    } else {
      $('body').removeClass('hoehe3');
      $('.hoehe3').hide();
    }

    if (windowHeight <= documentHeight / 1.8) {
      $('body').addClass('hoehe4');
      $('body').removeClass('hoehe1 hoehe2 hoehe3');
      $('.hoehe4').show();
      $('.hoehe1, .hoehe2, .hoehe3').hide();
    } else {
      $('body').removeClass('hoehe4');
      $('.hoehe4').hide();
    }
  }

  // Initial check
  checkHeight();

  // Check height on window resize
  $(window).resize(function () {
    checkHeight();
  });
});