$(function(){

$(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
});

$('.products-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
          breakpoint: 1950,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1490,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 721,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            arrows: true
          }
        }
      ]
});

// Price Range block
$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1200,
    from: 0,
    to: 600,
    prefix: "$",
    grid: true
});

$('.icon-th-list').on('click', function () {
    $('.products__item').addClass('list');
    $(".icon-th-list").addClass('active');
    $(".icon-th-large").removeClass('active');
});
$('.icon-th-large').on('click', function () {
    $('.products__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
});

// menu button
$('.menu__btn').on('click', function (){
    $('.menu__list').slideToggle();
});

// tabs
$('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
    $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
    });

// selects
$('input[type="file"], select').styler();

    var mixer = mixitup('.products__box');
    
});