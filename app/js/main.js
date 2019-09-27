$(function(){

$(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    // readOnly: true
    });
$('.products-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
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

$(".icon-th-list").on('click', function () {
    $('.products__item').addClass('list');
    $(".icon-th-list").addClass('active');
    $(".icon-th-large").removeClass('active');
});
$(".icon-th-large").on('click', function () {
    $('.products__item').removeClass('list');
    $(".icon-th-large").addClass('active');
    $(".icon-th-list").removeClass('active');
});


    var mixer = mixitup('.products__box');
    
   
    
});