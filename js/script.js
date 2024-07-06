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
        resetRandStyles();
        console.log('START');
      }
    } else if (currentWidth <= initialWidth / 2 && currentWidth <= initialWidth / 1.5) {
      if (prevClass !== 'viertelwidth') {
        prevClass = 'viertelwidth';
        count = (count % 3) + 1;
        currentRand = count + 12;
        resetRandStyles();
        $(`.rand${currentRand}`).show();
        console.log(`.rand${currentRand} ` + 'viertelwidth');

        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          $('body').addClass('viertelwidth');
          $('body').removeClass('dreiviertelwidth halbewidth fullwidth');
          $('.viertelwidth').show();
          $('.halbewidth, .dreiviertelwidth, .fullwidth').hide();
        }
      }
    } else if (currentWidth <= initialWidth / 1.5 && currentWidth <= initialWidth / 1.1) {
      if (prevClass !== 'halbewidth') {
        prevClass = 'halbewidth';
        count = (count % 3) + 1;
        currentRand = count + 9;
        resetRandStyles();
        $(`.rand${currentRand}`).show();
        console.log(`.rand${currentRand} ` + 'halbewidth');

        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          $('body').addClass('halbewidth');
          $('body').removeClass('dreiviertelwidth viertelwidth fullwidth');
          $('.halbewidth').show();
          $('.dreiviertelwidth, .viertelwidth, .fullwidth').hide();
        }
      }
    } else if (currentWidth <= initialWidth / 1.1) {
      if (prevClass !== 'dreiviertelwidth') {
        prevClass = 'dreiviertelwidth';
        count = (count % 9) + 1;
        currentRand = count;
        resetRandStyles();
        $(`.rand${currentRand}`).show();
        console.log(`.rand${currentRand} ` + 'dreiviertelwidth');

        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          $('body').addClass('dreiviertelwidth');
          $('body').removeClass('halbewidth viertelwidth fullwidth');
          $('.dreiviertelwidth').show();
          $('.halbewidth, .viertelwidth, .fullwidth').hide();
        }
      }
    } else if (currentWidth >= initialWidth * 2 && currentWidth >= initialWidth / 1.5) {
      if (prevClass !== 'viertelwidth') {
        prevClass = 'viertelwidth';
        count = (count % 3) + 1;
        currentRand = count + 12;
        resetRandStyles();
        $(`.rand${currentRand}`).show();
        console.log(`.rand${currentRand} ` + 'viertelwidth');


        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          $('body').addClass('viertelwidth');
          $('body').removeClass('dreiviertelwidth halbewidth fullwidth');
          $('.viertelwidth').show();
          $('.halbewidth, .dreiviertelwidth, .fullwidth').hide();
        }
      }
    } else if (currentWidth >= initialWidth * 1.5 && currentWidth >= initialWidth / 1.1) {
      if (prevClass !== 'halbewidth') {
        prevClass = 'halbewidth';
        count = (count % 3) + 1;
        currentRand = count + 9;
        resetRandStyles();
        $(`.rand${currentRand}`).show();
        console.log(`.rand${currentRand} ` + 'halbewidth');

        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          $('body').addClass('halbewidth');
          $('body').removeClass('dreiviertelwidth viertelwidth fullwidth');
          $('.halbewidth').show();
          $('.dreiviertelwidth, .viertelwidth, .fullwidth').hide();
        }
      }
    } else if (currentWidth >= initialWidth * 1.1) {
      if (prevClass !== 'dreiviertelwidth') {
        prevClass = 'dreiviertelwidth';
        count = (count % 9) + 1;
        currentRand = count;
        resetRandStyles();
        $(`.rand${currentRand}`).show();
        console.log(`.rand${currentRand} ` + 'dreiviertelwidth');


        if (!$('body').hasClass('ueberhalbheight') && !$('body').hasClass('unterhalbheight')) {
          $('body').addClass('dreiviertelwidth');
          $('body').removeClass('halbewidth viertelwidth fullwidth');
          $('.dreiviertelwidth').show();
          $('.halbewidth, .viertelwidth, .fullwidth').hide();
        }
      }
    }
  }

  function resetRandStyles() {
    $('.rand').hide();
  }

  function showCurrentRand(halbClass) {
    $('.rand').hide();
    if (halbClass === 'dreiviertelwidth') {
      $(`.rand${currentRand}`).show();
    } else if (halbClass === 'halbewidth') {
      $(`.rand${currentRand}`).show();
    } else if (halbClass === 'viertelwidth') {
      $(`.rand${currentRand}`).show();
    }
  }

  function showCurrentHeightRand(halbClass) {
    $('.rand').hide();
    if (halbClass === 'ueberhalbheight') {
      $(`.rand${currentHeightRand + 15}`).show();
      console.log(`.rand${currentRand} ` + 'ueberhalbheight');

    } else if (halbClass === 'unterhalbheight') {
      $(`.rand${currentHeightRand + 18}`).show();
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
        console.log(`.rand${currentRand} ` + 'unterhalbheight');

        $('.ueberhalbheight, .fullwidth, .halbewidth, .dreiviertelwidth, .viertelwidth').hide();
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
        currentHeightRand = (currentHeightRand % 3) + 1;
        showCurrentHeightRand('ueberhalbheight');
      }
    } else {
      if (prevHeightClass !== '') {
        prevHeightClass = '';
        $('body').removeClass('ueberhalbheight unterhalbheight');
        $('.ueberhalbheight, .unterhalbheight').hide();
        checkWidth();
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

    console.log(edgeX + edgeY);
  }

  $(document).on('mousemove', function (e) {
    getPosition(e);
  });
});
