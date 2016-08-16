 
$('.preload h1').fadeIn(2000);

setTimeout(function () {
  $('.preload').fadeOut(4000);
}, 2000); 


 $('.slider-brands-for').slick({
  slidesToShow: 1,
  arrows: true,
  fade: true,
  centerMode: true,
  infinite: true,
  speed: 1000,
  asNavFor: '.slider-brands-nav'
});

  $('.slider-brands-nav').slick({
  slidesToShow: 3,
  dots: false,
  speed: 1000,
  focusOnSelect: true,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  arrows: true
});

$('.slider-brands-for').css('visibility', 'visible');

imgWidth();
popup();

function imgWidth() {
    if ($(window).width() >= 768) {
    $('.slider-brands-nav img').css('width', '');
    $('.slider-brands-nav img').css('height', '');
  } else {
    $('.slider-brands-nav img').css('width', $(window).width());
    $('.slider-brands-nav img').css('height', 'auto');
  }
};

$(window).resize(function(){
  imgWidth();
  if ($(window).width() <= 768) {
    $('.slick-slide').unbind('click');
  } else {
    popup();
  }
});

function popup() {
  $('.slick-slide').click(function (event) {
    var slickSlider = $(this);
    var slickNext = $(this).closest('.slick-slider').find('.slick-next').attr('id', 'right');
    var slickPrev = $(this).closest('.slick-slider').find('.slick-prev').attr('id', 'left');
    var popup = $(this).clone();
    $('.popup').attr('onmousedown', 'return false');
    $('.popup').attr('onselectstart', 'return false');
    $('.popup').append(popup);
    $('.popup div').removeClass();
    $('.popup div').attr('style', '');
    $('.popup').show();
    $('.popup > div').append('<a href="#" class="cl_popup" title="Закрыть" onclick="event.preventDefault()">+</a>');
    $('.popup > div').append('<label class="left" for="left"><</label');
    $('.popup > div').append('<label class="right" for="right">></label');
    $('.popup > div').click(function (event) {
      event.stopPropagation();
    });

    $('.popup .left').click(function () {

      $('.popup img').remove();
      var slickCenter = slickSlider.closest('.slick-slider').find('.slick-center').prev().find('img').clone();
      console.log(slickSlider.closest('.slick-slider').find('.slick-center img').prev());
      $('.popup div div').append(slickCenter[0]);
    });

    $('.popup .right').click(function () {
      $('.popup img').remove();
      var slickCenter = slickSlider.closest('.slick-slider').find('.slick-center').next().find('img').clone();
      $('.popup div div').append(slickCenter[0]);
    });


    $('.popup .cl_popup').click(function () {
      $('.popup').hide();
      $('.popup > div').remove();
      slickNext.removeAttr("id")
      slickPrev.removeAttr("id")
    });
    $('.popup').click(function () {
      $('.popup').hide();
      $('.popup > div').remove();
    });
  })
};

if ($(window).width() <= 768) {
  $('.slick-slide').unbind('click');
}

function slider_show () {
  $('.slider-brands-for .slick-track > div').each(function() {
  if ($(this).hasClass('slick-active')) {
    var dataFor = $(this).data('sliderfor');
    $('.slider-brands-nav').hide();
    $('.slider-brands-nav[data-slidernav=' + dataFor + ']').show();
  } 
});
}

slider_show ();

$('.slick-arrow').click(function() {
  slider_show ();
});

