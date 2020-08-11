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
        pauseOnHover: true,
        autoplay: true,
        dots: true,
    });

    //PASS SLICK SLIDER
    $('.pass__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        pauseOnHover: true,
        arrows: false,
        autoplay: true,
        dots: true,
    });
    //COMPANIES SLIDER
    $('.companies__slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: false,
        autoplay: true,
    });
    //SCROLL MODIFIER
    (function($) {
        $(window).on('load', function() {
            $('el').mCustomScrollbar({
                theme: 'rounded-dots',

            });
        });
    })(jQuery);

    //VIDEO BUTTON CONTROLL -- LEFT SIDE VIDEO
    $('#left-video__btn').on('click', function() {
        $('.video__link--left').click()
    });
    //VIDEO BUTTON CONTROLL -- RIGHT SIDE VIDEO
    $('#right-video__btn').on('click', function() {
        $('.video__link--right').click()
    });

    //UPBUTTON 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if ($('#upbutton').is(':hidden')) {
                $('#upbutton').css({
                    opacity: 1
                }).fadeIn('slow');
            }
        } else {
            $('#upbutton').stop(true, false).fadeOut('fast');
        }
    });
    $('#upbutton').click(function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 300);
    });
});