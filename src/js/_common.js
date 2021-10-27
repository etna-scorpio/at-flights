import $ from 'jquery';
import 'slick-carousel';

$('.js-blog-main-slider').slick({
  dots: true,
  arrows: false,
  fade: true,
  adaptiveHeight: true
});


function showMobCarousel() {
  if ($(window).outerWidth() < 768 && !$('.js-mob-slider').hasClass('slick-initialized')) {
    $('.js-mob-slider').slick({
      dots: true,
      arrows: false,
      adaptiveHeight: true
    });
  }

  $(window).resize(function() {
    if ($(window).outerWidth() < 768 && !$('.js-mob-slider').hasClass('slick-initialized')) {
      $('.js-mob-slider').slick({
        dots: true,
        arrows: false,
        adaptiveHeight: true
      });
    } else if ($(window).outerWidth() > 768 && $('.js-mob-slider').hasClass('slick-initialized')) {
      $('.js-mob-slider').slick('unslick');
    }
  });
}


showMobCarousel();


$('.js-article-slider').slick({
  dots: true,
  fade: true,
  adaptiveHeight: true,
  prevArrow: '<button class="slick-prev slick-arrow" aria-label="Next" type="button"><svg class="icon icon-arrow-left"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg class="icon icon-arrow-right"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>'
});


$('.js-vote-button').click(function() {
  $('.js-vote-button').css('display', 'none');
  $('.js-vote-counter').css('display', 'flex');
});


$('.js-switch-light').click(function() {
  if ($('body').hasClass('body--dark-theme')) {
    $('body').removeClass('body--dark-theme');
  }
});

$('.js-switch-dark').click(function() {
  if (!$('body').hasClass('body--dark-theme')) {
    $('body').addClass('body--dark-theme');
  }
});
