// Initialize counts for each class
let countFull = 0;
let countDreiviertel = 0;
let countHalbe = 0;
let countViertel = 0;
let countUeberhalb = 15; // Start at 15 so the first increment goes to 16
let countUnterhalb = 21; // Start at 21 so the first increment goes to 22
let prevClass = '';
let prevHeightClass = '';

$(document).ready(function () {
  $(".resizable-container").click(function () {
    $(this).toggleClass("expanded");

    if ($(this).hasClass("expanded")) {
      $(this).css("cursor", "zoom-out");
      $(this).find('img').css("cursor", "zoom-out"); // Ensures cursor changes inside the image as well
    } else {
      $(this).css("cursor", "zoom-in");
      $(this).find('img').css("cursor", "zoom-in"); // Ensures cursor changes inside the image as well
    }
  });
});


$(document).ready(function () {
  const initialWidth = $(document).width();
  const initialHeight = $(document).height();

  function checkWidth() {
    const currentWidth = $(window).width();

    if (currentWidth >= initialWidth / 1.1 && currentWidth <= initialWidth * 1.1) {
      if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
        $('body').addClass('fullwidth');
        $('body').removeClass('dreiviertelwidth halbewidth viertelwidth');
        $('.fullwidth').show();
        $('.dreiviertelwidth, .halbewidth, .viertelwidth').hide();
        $('.raumblau, .raumbraun, .raumorange').css('background-color', '');
        resetRandStyles();
        $('.logotext').removeClass().addClass('logotext logotext-fullwidth');
      }
    } else if (currentWidth <= initialWidth / 2) {
      if (prevClass !== 'viertelwidth') {
        prevClass = 'viertelwidth';
        updateCountAndRand('viertelwidth', 13, 15);
        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          $('body').addClass('viertelwidth');
          $('body').removeClass('dreiviertelwidth halbewidth fullwidth');
          $('.viertelwidth').show();
          $('.halbewidth, .dreiviertelwidth, .fullwidth').hide();
          $('.raumblau, .raumbraun').css('background-color', '');
          $('.raumorange').css('background-color', 'rgba(255, 110, 77, 0.41)');
          $('.logotext').removeClass().addClass('logotext logotext-viertelwidth');
        }
      }
    } else if (currentWidth > initialWidth / 2 && currentWidth <= initialWidth / 1.5) {
      if (prevClass !== 'halbewidth') {
        prevClass = 'halbewidth';
        updateCountAndRand('halbewidth', 10, 12);
        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          $('body').addClass('halbewidth');
          $('body').removeClass('dreiviertelwidth viertelwidth fullwidth');
          $('.halbewidth').show();
          $('.dreiviertelwidth, .viertelwidth, .fullwidth').hide();
          $('.raumblau, .raumorange').css('background-color', '');
          $('.raumbraun').css('background-color', 'rgba(179, 134, 105, 0.41)');
          $('.logotext').removeClass().addClass('logotext logotext-halbwidth');
        }
      }
    } else if (currentWidth > initialWidth / 1.5 && currentWidth <= initialWidth / 1.1) {
      if (prevClass !== 'dreiviertelwidth') {
        prevClass = 'dreiviertelwidth';
        updateCountAndRand('dreiviertelwidth', 1, 9);
        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          $('body').addClass('dreiviertelwidth');
          $('body').removeClass('halbewidth viertelwidth fullwidth');
          $('.dreiviertelwidth').show();
          $('.halbewidth, .viertelwidth, .fullwidth').hide();
          $('.raumbraun, .raumorange').css('background-color', '');
          $('.raumblau').css('background-color', 'rgba(0, 140, 255, 0.41)');
          $('.logotext').removeClass().addClass('logotext logotext-dreiviertelwidth');
        }
      }
    }
  }

  function resetRandStyles() {
    $('.rand').hide();
  }

  function updateCountAndRand(widthClass, min, max) {
    let count;
    switch (widthClass) {
      case 'dreiviertelwidth':
        countDreiviertel = (countDreiviertel % (max - min + 1)) + min;
        count = countDreiviertel;
        break;
      case 'halbewidth':
        countHalbe = (countHalbe % (max - min + 1)) + min;
        count = countHalbe;
        break;
      case 'viertelwidth':
        countViertel = (countViertel % (max - min + 1)) + min;
        count = countViertel;
        break;
      case 'ueberhalbheight':
        countUeberhalb = (countUeberhalb % (max - min + 1)) + min;
        count = countUeberhalb;
        break;
      case 'unterhalbheight':
        countUnterhalb = (countUnterhalb % (max - min + 1)) + min;
        count = countUnterhalb;
        break;
      default:
        count = 0;
    }
    $('.rand').hide();
    $(`.rand${count}`).show();
    console.log(`rand${count} ${widthClass}`);
  }

  function showCurrentHeightRand(halbClass) {
    if (halbClass === 'ueberhalbheight') {
      countUeberhalb = (countUeberhalb - 15) % 6 + 16; // Cycle between 16 and 21
      $('.rand').hide();
      $(`.rand${countUeberhalb}`).show();
      console.log(`rand${countUeberhalb} ueberhalbheight`);
    } else if (halbClass === 'unterhalbheight') {
      countUnterhalb = (countUnterhalb - 21) % 6 + 22; // Cycle between 22 and 27
      $('.rand').hide();
      $(`.rand${countUnterhalb}`).show();
      console.log(`rand${countUnterhalb} unterhalbheight`);
    }
  }

  function checkHeight() {
    const currentHeight = $(window).height();

    if (currentHeight <= initialHeight / 2) {
      if (prevHeightClass !== 'unterhalbheight') {
        prevHeightClass = 'unterhalbheight';
        $('body').addClass('unterhalbheight');
        $('body').removeClass('ueberhalbheight fullwidth halbewidth dreiviertelwidth viertelwidth');
        $('.unterhalbheight').show();
        $('.ueberhalbheight, .fullwidth, .halbewidth, .dreiviertelwidth, .viertelwidth').hide();
        $('.raumblau, .raumbraun, .raumorange, .raumlila').css('background-color', '');
        $('.raumduli').css('background-color', 'rgba(220, 153, 251, 0.6)');
        showCurrentHeightRand('unterhalbheight');
        $('.logotext').removeClass().addClass('logotext logotext-unterhalbheight');
      }
    } else if (currentHeight > initialHeight / 2 && currentHeight <= initialHeight / 1.5) {
      if (prevHeightClass !== 'ueberhalbheight') {
        prevHeightClass = 'ueberhalbheight';
        $('body').addClass('ueberhalbheight');
        $('body').removeClass('unterhalbheight fullwidth halbewidth dreiviertelwidth viertelwidth');
        $('.ueberhalbheight').show();
        $('.unterhalbheight, .fullwidth, .halbewidth, .dreiviertelwidth, .viertelwidth').hide();
        $('.raumblau, .raumbraun, .raumorange, .raumduli').css('background-color', '');
        $('.raumlila').css('background-color', 'rgb(59, 140, 142, 0.6)');
        showCurrentHeightRand('ueberhalbheight');
        $('.logotext').removeClass().addClass('logotext logotext-ueberhalbheight');
      }
    } else {
      if (prevHeightClass !== '') {
        prevHeightClass = '';
        $('body').removeClass('ueberhalbheight unterhalbheight');
        $('.ueberhalbheight, .unterhalbheight').hide();
        $('.halbewidth, .viertelwidth, .fullwidth').hide();
        $('.fullwidth').show();
        checkWidth();
        $('.raumlila, .raumduli').css('background-color', '');
        $('.logotext').removeClass().addClass('logotext logotext-fullwidth');
      }
    }
  }

  checkWidth();
  checkHeight();

  var prevW = $(window).width(), prevH = $(window).height();

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

$(document).ready(function () {
  function closestEdgeX(x, w) {
    if (x <= w / 2) {
      return ["left"];
    } else {
      return ["right"];
    }
  }

  function closestEdgeY(y, h) {
    if (y <= h / 2) {
      return ["top"];
    } else {
      return ["bottom"];
    }
  }

  function getPosition(e) {
    var x = e.clientX,
      y = e.clientY,
      w = $(document).width(),
      h = $(document).height();
    var edgeX = closestEdgeX(x, w);
    var edgeY = closestEdgeY(y, h);

    $('html').removeClass();
    $('html').addClass(edgeX + edgeY);

    // console.log(edgeX + edgeY);
  }

  $(document).on('mousemove', function (e) {
    if ($(e.target).hasClass("raumplan")) {
      $(".nav-cursor").addClass("show")
      $(".nav-cursor").css("left", e.pageX)
      $(".nav-cursor").css("top", e.pageY)
    } else {
      $(".nav-cursor").removeClass("show")
      getPosition(e);
    }
  });

  // Add hover effects for different colors
  $('.farbe1').hover(
    function () {
      $('.raumblau').css('background-color', 'rgba(0, 140, 255, 0.41)');
    },
    function () {
      $('.raumblau').css('background-color', '');
    }
  );

  $('.farbe2').hover(
    function () {
      $('.raumbraun').css('background-color', 'rgba(179, 134, 105, 0.41)');
    },
    function () {
      $('.raumbraun').css('background-color', '');
    }
  );

  $('.farbe3').hover(
    function () {
      $('.raumorange').css('background-color', 'rgba(255, 110, 77, 0.41)');
    },
    function () {
      $('.raumorange').css('background-color', '');
    }
  );

  $('.farbe5').hover(
    function () {
      $('.raumlila').css('background-color', 'rgb(59, 140, 142, 0.6)');
    },
    function () {
      $('.raumlila').css('background-color', '');
    }
  );

  $('.farbe4').hover(
    function () {
      $('.raumduli').css('background-color', 'rgba(220, 153, 251, 0.6)');
    },
    function () {
      $('.raumduli').css('background-color', '');
    }
  );
});


