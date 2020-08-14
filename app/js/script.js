$(function() {
    $('.fancybox').fancybox({
        padding: 0, //убираем отступ
        helpers: {
            overlay: {
                locked: false // отключаем блокировку overlay
            }
        }
    });
    //BLOG HEADER STICK MENU
    var scrolled;
    window.onscroll = function() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 245) {
            $(".header").css({
                "background": " rgba(84, 128, 221, 0.8)"
            })
        }
        if (245 > scrolled) {
            $(".header").css({
                "background": " rgba(255, 255, 255, 0.1)"
            })
        }
    }

    //ACCORDION ON TOOLS PAGE
    $(".accord__trigger").on("click",
        function() {
            $(this).next(".accord__content").slideToggle(500);
        }
    );
    //SUPPORT SLICK SLIDER
    $('.supprot__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 1000,
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
        autoplaySpeed: 1000,
        dots: true,
    });
    //COMPANIES SLIDER
    $('.companies__slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: false,
        autoplaySpeed: 1000,
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