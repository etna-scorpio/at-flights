import $ from 'jquery';
import 'slick-carousel';

$('.js-blog-main-slider').slick({
  dots: true,
  arrows: false,
  fade: true,
  adaptiveHeight: true
});


function showMobCarousel() {
  if ($(window).width() < 767 && !$('.js-mob-slider').hasClass('slick-initialized')) {
    $('.js-mob-slider').slick({
      dots: true,
      arrows: false,
      adaptiveHeight: true
    });
  }

  $(window).resize(function() {
    if ($(window).width() < 767 && !$('.js-mob-slider').hasClass('slick-initialized')) {
      $('.js-mob-slider').slick({
        dots: true,
        arrows: false,
        adaptiveHeight: true
      });
    } else if ($(window).width() > 767 && $('.js-mob-slider').hasClass('slick-initialized')) {
      $('.js-mob-slider').slick('unslick');
    }
  });
}


showMobCarousel();
