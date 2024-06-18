let count = 0;
let prevClass = '';
let currentRand = 1;

$(document).ready(function () {
  const initialWidth = $(document).width();

  function checkWidth() {
    const currentWidth = $(window).width();
    // console.log('Window width:', currentWidth);

    if (currentWidth <= initialWidth) {
      $('body').addClass('halb-0');
      $('body').removeClass('halb-3 halb-2 halb');
      $('.halb-0').show();
      $('.halb-3, .halb-2, .halb').hide();
      resetRandStyles();
    } else {
      $('body').removeClass('halb-0');
      $('.halb-0').hide();
    }





    // if ((currentWidth <= initialWidth / 2 && currentWidth >= initialWidth / 1.5) ||
    //   (currentWidth >= initialWidth * 2 && currentWidth <= initialWidth / 1.5)) {
    //   console.log(prevClass);
    //   prevClass = 'halb'
    // }
    // else if ((currentWidth <= initialWidth / 1.5 && currentWidth >= initialWidth / 1.1) ||
    //   (currentWidth >= initialWidth * 1.5 && currentWidth <= initialWidth / 1.1)) {
    //   console.log(prevClass);
    //   prevClass = 'halb-2'
    // }
    // else if ((currentWidth <= initialWidth / 1.1) ||
    //   (currentWidth >= initialWidth * 1.1)) {
    //   console.log(prevClass);
    //   prevClass = 'halb-3'
    // }


    if ((currentWidth <= initialWidth / 1.1 || currentWidth >= initialWidth * 1.1) && prevClass !== 'halb-3') {
      count++;
      if (count > 3) count = 1;
      currentRand = count;

      $('.rand1, .rand2, .rand3').hide();
      if (count === 1) {
        $('.rand1').show();
      } else if (count === 2) {
        $('.rand2').show();
      } else if (count === 3) {
        $('.rand3').show();
      }

      prevClass = 'halb-3';
    } else if ((currentWidth > initialWidth / 1.1 && currentWidth < initialWidth * 1.1) && prevClass === 'halb-3') {
      prevClass = '';
    }

    if (currentWidth <= initialWidth / 1.1 || currentWidth >= initialWidth * 1.1) {
      showCurrentRand('halb-3');
      $('body').addClass('halb-3');
      $('body').removeClass('halb-2 halb halb-0');
      $('.halb-3').show();
      $('.halb-2, .halb, .halb-0').hide();
      $('.raumblau').css('background-color', 'rgba(0, 140, 255, 0.41)');
    } else {
      $('body').removeClass('halb-3');
      $('.halb-3').hide();
      $('.raumblau').css('background-color', '');
    }

    if ((currentWidth <= initialWidth / 1.5 || currentWidth >= initialWidth * 1.5) && prevClass !== 'halb-2') {
      console.log('ppppppppp');
      count++;
      if (count > 3) count = 1;
      currentRand = count;

      $('.rand4, .rand5, .rand6').hide();
      if (count === 1) {
        $('.rand4').show();
        console.log("rand4");
      } else if (count === 2) {
        $('.rand5').show();
        console.log("rand5");
      } else if (count === 3) {
        $('.rand6').show();
        console.log("rand6");
      }

      prevClass = 'halb-2';
    } else if ((currentWidth > initialWidth / 1.5 && currentWidth < initialWidth * 1.5) && prevClass === 'halb-2') {
      prevClass = '';
    }

    if (currentWidth <= initialWidth / 1.5 || currentWidth >= initialWidth * 1.5) {
      showCurrentRand('halb-2');
      $('body').addClass('halb-2');
      $('body').removeClass('halb-3 halb halb-0');
      $('.halb-2').show();
      $('.halb-3, .halb, .halb-0').hide();
      $('.raumblau').css('background-color', '');
      $('.raumbraun').css('background-color', 'rgb(179, 134, 105, 0.41)');
    } else {
      $('body').removeClass('halb-2');
      $('.halb-2').hide();
      $('.raumbraun').css('background-color', '');
    }

    if ((currentWidth <= initialWidth / 2 || currentWidth >= initialWidth * 2) && prevClass !== 'halb') {
      count++;
      if (count > 3) count = 1;
      currentRand = count;

      $('.rand7, .rand8, .rand9').hide();
      if (count === 1) {
        $('.rand7').show();
      } else if (count === 2) {
        $('.rand8').show();
      } else if (count === 3) {
        $('.rand9').show();
      }

      prevClass = 'halb';
    } else if ((currentWidth > initialWidth / 2 && currentWidth < initialWidth * 2) && prevClass === 'halb') {
      prevClass = '';
    }

    if (currentWidth <= initialWidth / 2 || currentWidth >= initialWidth * 2) {
      showCurrentRand('halb');
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


  function resetRandStyles() {
    $('.rand1, .rand2, .rand3, .rand4, .rand5, .rand6, .rand7, .rand8, .rand9').hide();
  }

  function showCurrentRand(halbClass) {
    if (halbClass === 'halb-3') {
      $('.rand1, .rand2, .rand3').hide();
      if (currentRand === 1) {
        $('.rand1').show();
      } else if (currentRand === 2) {
        $('.rand2').show();
      } else if (currentRand === 3) {
        $('.rand3').show();
      }
    } else if (halbClass === 'halb-2') {
      $('.rand4, .rand5, .rand6').hide();
      if (currentRand === 1) {
        $('.rand4').show();
      } else if (currentRand === 2) {
        $('.rand5').show();
      } else if (currentRand === 3) {
        $('.rand6').show();
      }
    } else if (halbClass === 'halb') {
      $('.rand7, .rand8, .rand9').hide();
      if (currentRand === 1) {
        $('.rand7').show();
      } else if (currentRand === 2) {
        $('.rand8').show();
      } else if (currentRand === 3) {
        $('.rand9').show();
      }
    }
  }

  checkWidth();

  const documentHeight = $(document).height();
  // console.log('Document height (initial):', documentHeight);

  function checkHeight() {
    const windowHeight = $(window).height();
    console.log('Window height:', windowHeight);

    if (windowHeight <= documentHeight / 1.5) {
      $('body').addClass('hoehe1');
      $('body').removeClass('halb-0 halb-2 halb-3 halb hoehe2 hoehe3');
      $('.hoehe1').show();
      $('.halb-0, .halb-2, .halb-3, .halb, .hoehe2, .hoehe3').hide();
      $('.raumblau').css('background-color', '');
      $('.raumbraun').css('background-color', '');
      $('.raumorange').css('background-color', '');
      $('.raumlila').css('background-color', 'rgb(220, 153, 251, 0.6)');
    } else {
      $('body').removeClass('hoehe1');
      $('.hoehe1').hide();
      $('.raumlila').css('background-color', '');
    }
  }

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
