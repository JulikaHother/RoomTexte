// Initialize count, previous class name, and current random value
let count = 0;
let prevClass = 'full';
let currentRand = 1;
let currentHeightRand = 1;
let prevHeightClass = '';

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
        console.log('START');
      }
    } else if (currentWidth <= initialWidth / 2 && currentWidth <= initialWidth / 1.5) {
      if (prevClass !== 'viertelwidth') {
        prevClass = 'viertelwidth';
        console.log(prevClass);
        console.log('viertelwidth');
        count = (count % 3) + 1;
        currentRand = count;
        $('.rand7, .rand8, .rand9').hide();
        $(`.rand${count + 6}`).show();

        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          showCurrentRand('viertelwidth');
          $('body').addClass('viertelwidth');
          $('body').removeClass('dreiviertelwidth halbewidth fullwidth');
          $('.viertelwidth').show();
          $('.halbewidth, .dreiviertelwidth, .fullwidth').hide();
          $('.raumblau, .raumbraun').css('background-color', '');
          $('.raumorange').css('background-color', 'rgba(255, 110, 77, 0.41)');
        }
      }
    } else if (currentWidth <= initialWidth / 1.5 && currentWidth <= initialWidth / 1.1) {
      if (prevClass !== 'halbewidth') {
        prevClass = 'halbewidth';
        console.log(prevClass);
        console.log('halbewidth');
        count = (count % 3) + 1;
        currentRand = count;
        $('.rand4, .rand5, .rand6').hide();
        $(`.rand${count + 3}`).show();
        console.log(`rand${count + 3}`);

        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          showCurrentRand('halbewidth');
          $('body').addClass('halbewidth');
          $('body').removeClass('dreiviertelwidth viertelwidth fullwidth');
          $('.halbewidth').show();
          $('.dreiviertelwidth, .viertelwidth, .fullwidth').hide();
          $('.raumblau, .raumorange').css('background-color', '');
          $('.raumbraun').css('background-color', 'rgba(179, 134, 105, 0.41)');
        }
      }
    } else if (currentWidth <= initialWidth / 1.1) {
      if (prevClass !== 'dreiviertelwidth') {
        prevClass = 'dreiviertelwidth';
        console.log(prevClass);
        console.log('dreiviertelwidth');
        count = (count % 3) + 1;
        currentRand = count;
        $('.rand1, .rand2, .rand3').hide();
        $(`.rand${count}`).show();

        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          showCurrentRand('dreiviertelwidth');
          $('body').addClass('dreiviertelwidth');
          $('body').removeClass('halbewidth viertelwidth fullwidth');
          $('.dreiviertelwidth').show();
          $('.halbewidth, .viertelwidth, .fullwidth').hide();
          $('.raumbraun, .raumorange').css('background-color', '');
          $('.raumblau').css('background-color', 'rgba(0, 140, 255, 0.41)');
        }
      }
    } else if (currentWidth >= initialWidth * 2 && currentWidth >= initialWidth / 1.5) {
      if (prevClass !== 'viertelwidth') {
        prevClass = 'viertelwidth';
        console.log(prevClass);
        console.log('viertelwidth');
        count = (count % 3) + 1;
        currentRand = count;
        $('.rand7, .rand8, .rand9').hide();
        $(`.rand${count + 6}`).show();

        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          showCurrentRand('viertelwidth');
          $('body').addClass('viertelwidth');
          $('body').removeClass('dreiviertelwidth halbewidth fullwidth');
          $('.viertelwidth').show();
          $('.halbewidth, .dreiviertelwidth, .fullwidth').hide();
          $('.raumblau, .raumbraun').css('background-color', '');
          $('.raumorange').css('background-color', 'rgba(255, 110, 77, 0.41)');
        }
      }
    } else if (currentWidth >= initialWidth * 1.5 && currentWidth >= initialWidth / 1.1) {
      if (prevClass !== 'halbewidth') {
        prevClass = 'halbewidth';
        console.log(prevClass);
        console.log('halbewidth');
        count = (count % 3) + 1;
        currentRand = count;
        $('.rand4, .rand5, .rand6').hide();
        $(`.rand${count + 3}`).show();
        console.log(`rand${count + 3}`);

        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          showCurrentRand('halbewidth');
          $('body').addClass('halbewidth');
          $('body').removeClass('dreiviertelwidth viertelwidth fullwidth');
          $('.halbewidth').show();
          $('.dreiviertelwidth, .viertelwidth, .fullwidth').hide();
          $('.raumblau, .raumorange').css('background-color', '');
          $('.raumbraun').css('background-color', 'rgba(179, 134, 105, 0.41)');
        }
      }
    } else if (currentWidth >= initialWidth * 1.1) {
      if (prevClass !== 'dreiviertelwidth') {
        prevClass = 'dreiviertelwidth';
        console.log(prevClass);
        console.log('dreiviertelwidth');
        count = (count % 3) + 1;
        currentRand = count;
        $('.rand1, .rand2, .rand3').hide();
        $(`.rand${count}`).show();

        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          showCurrentRand('dreiviertelwidth');
          $('body').addClass('dreiviertelwidth');
          $('body').removeClass('halbewidth viertelwidth fullwidth');
          $('.dreiviertelwidth').show();
          $('.halbewidth, .viertelwidth, .fullwidth').hide();
          $('.raumbraun, .raumorange').css('background-color', '');
          $('.raumblau').css('background-color', 'rgba(0, 140, 255, 0.41)');
        }
      }
    }
  }

  function resetRandStyles() {
    $('.rand1, .rand2, .rand3, .rand4, .rand5, .rand6, .rand7, .rand8, .rand9, .rand10, .rand11, .rand12, .rand13, .rand14, .rand15').hide();
  }

  function showCurrentRand(halbClass) {
    if (halbClass === 'dreiviertelwidth') {
      $('.rand1, .rand2, .rand3').hide();
      $(`.rand${currentRand}`).show();
    } else if (halbClass === 'halbewidth') {
      $('.rand4, .rand5, .rand6').hide();
      $(`.rand${currentRand + 3}`).show();
    } else if (halbClass === 'viertelwidth') {
      $('.rand7, .rand8, .rand9').hide();
      $(`.rand${currentRand + 6}`).show();
    }
  }

  function showCurrentHeightRand(halbClass) {
    if (halbClass === 'ueberhalbheight') {
      $('.rand10, .rand11, .rand12').hide();
      $(`.rand${currentHeightRand + 9}`).show();
    } else if (halbClass === 'unterhalbheight') {
      $('.rand13, .rand14, .rand15').hide();
      $(`.rand${currentHeightRand + 12}`).show();
    }
  }

  function checkHeight() {
    const currentHeight = $(window).height();
    console.log('Window height:', currentHeight);

    if (currentHeight <= initialHeight / 2) {
      if (prevHeightClass !== 'unterhalbheight') {
        prevHeightClass = 'unterhalbheight';
        $('body').addClass('unterhalbheight');
        $('body').removeClass('ueberhalbheight fullwidth halbewidth dreiviertelwidth viertelwidth');
        $('.unterhalbheight').show();
        $('.ueberhalbheight, .fullwidth, .halbewidth, .dreiviertelwidth, .viertelwidth').hide();
        $('.raumblau, .raumbraun, .raumorange, .raumlila').css('background-color', '');
        $('.raumduli').css('background-color', 'rgba(82, 77, 173, 0.6)');

        currentHeightRand = (currentHeightRand % 3) + 1;
        showCurrentHeightRand('unterhalbheight');
      }
    } else if (currentHeight > initialHeight / 2 && currentHeight <= initialHeight / 1.5) {
      if (prevHeightClass !== 'ueberhalbheight') {
        prevHeightClass = 'ueberhalbheight';
        $('body').addClass('ueberhalbheight');
        $('body').removeClass('unterhalbheight fullwidth halbewidth dreiviertelwidth viertelwidth');
        $('.ueberhalbheight').show();
        $('.unterhalbheight, .fullwidth, .halbewidth, .dreiviertelwidth, .viertelwidth').hide();
        $('.raumblau, .raumbraun, .raumorange, .raumduli').css('background-color', '');
        $('.raumlila').css('background-color', 'rgba(220, 153, 251, 0.6)');

        currentHeightRand = (currentHeightRand % 3) + 1;
        showCurrentHeightRand('ueberhalbheight');
      }
    } else {
      if (prevHeightClass !== '') {
        prevHeightClass = '';
        $('body').removeClass('ueberhalbheight unterhalbheight');
        $('.ueberhalbheight, .unterhalbheight').hide();
        checkWidth();
        $('.raumlila, .raumduli').css('background-color', '');
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
