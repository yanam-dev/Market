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

    var mixer = mixitup('.products__box');
    
   
    
});