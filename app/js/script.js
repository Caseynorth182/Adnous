$(function() {
    $('.fancybox').fancybox({
        padding: 0, //убираем отступ
        helpers: {
            overlay: {
                locked: false // отключаем блокировку overlay
            }
        }
    });

    //SUPPORT SLICK SLIDER
    $('.supprot__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
    });



});