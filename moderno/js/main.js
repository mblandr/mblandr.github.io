$(function () {
  $('.rate-star').rateYo({
    rating: 5,
    starWidth: '12px',
    readOnly: true,
  });
  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]
  });
  let mixer
  if ($('.products__inner-box').length)
    mixer = mixitup('.products__inner-box');
  $(".range-slider").ionRangeSlider({
    type: 'integer',
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    grid: false,
    prefix: '$',
    skin: 'round',
    hide_min_max: true,
  });
  $(window).resize(function () {
    if ($(window).width() <= 840) {
      $('.icon-th-list').removeClass('active');
      $('.icon-th-large').addClass('active');
      $('.product__item').removeClass('list');
    }
  });


  $('.icon-th-list').on('click', function () {
    $('.product__item').addClass('list');
    $('.icon-th-list').toggleClass('active');
    $('.icon-th-large').toggleClass('active');
  });

  $('.icon-th-large').on('click', function () {
    $('.product__item').removeClass('list');
    $('.icon-th-list').toggleClass('active');
    $('.icon-th-large').toggleClass('active');
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });
  $('.header__btn-menu').on('click', function () {
    $('.header__box').toggleClass('active');
  });

  $('select, input[type="file"]').styler();

  $('.tabs-container .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.tabs-container').find('.tab-item').removeClass('active-tab').hide();
    $('.tabs-container .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });
});