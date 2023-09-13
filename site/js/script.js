$(document).ready(function(){
    //if(window.location.pathname=='/'){
    if(window.location.href.slice(-10)=='index.html'){
        $('.header__bottom-menu').addClass('header__bottom-menu-active');
        $('.header__bottom-chevron').addClass('header__bottom-chevron-active');
        $('.header__bottom-left').addClass('header__bottom-left-active');
        if(window.innerWidth <= 575) {
            $('.main__productions-items').slick({
                slidesToShow: 1.5,
            });
        }

        $(window).resize(function() {
            let sliderIsLive
            if (window.innerWidth <= 575) {
                $('.main__productions-items').slick('unslick');
                sliderIsLive = false;
            }
            else if (sliderIsLive) {
                $('.main__productions-items').slick();
                sliderIsLive = true;
            }
        })

        $('.main__slider-xl').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
            draggable: false
        });
    
        $('.main__slider-lg').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
            draggable: false
        });
    
        $('.main__slider-md').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
        });
    
        $('.main__slider-sm').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
        });
    
        $('.main__slider-xs').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
        });
    }

    $('.footer__menu-title').click(function() {
        $(this).parent().children('.footer__menu-list').toggleClass('footer__menu-list-active');
        $(this).parent().toggleClass('footer__menu-title-active');
    });

    $('#footerSpoilerToggle').click(function() {
        $('.footer__spoiler-content').toggleClass('footer__spoiler-active');
        $(this).toggleClass('footer__spoiler-btn-active')
    });

    $('#headerSearchShow').click(function() {
        $('#headerSearch').addClass('search-active');
        setTimeout(function() {
            $('#headerSearch').addClass('search-show');
        }, 10)
    });
    
    $('#headerSearchClose').click(function() {
        $('#headerSearch').removeClass('search-show');
        setTimeout(function() {
            $('#headerSearch').removeClass('search-active');
        }, 300)
    })

    $('#headerSearchClose').click(function() {
        $('#headerSearch').removeClass('search-show');
        setTimeout(function() {
            $('#headerSearch').removeClass('search-active');
        }, 300)
    })
    
    $('#headerCatalogOpen').click(function() {
        $('.header__bottom-menu').toggleClass('header__bottom-menu-active');
        $('.header__bottom-chevron').toggleClass('header__bottom-chevron-active');
        $('.header__bottom-left').toggleClass('header__bottom-left-active');
    })


});