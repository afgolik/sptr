$(document).ready(function(){

    if(window.location.pathname=='/'){
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
    });
    
    $('.header__bottom-left').mouseover(function() {
        $('.wrape').addClass('wrape-active-header')
    });

    $('.header__bottom-left').mouseout(function() {
        $('.wrape').removeClass('wrape-active-header')
    });
    $('.header__bottom-item-open').mouseover(function() {
        $('.wrape').addClass('wrape-active-header')
    });

    $('.header__bottom-item-open').mouseout(function() {
        $('.wrape').removeClass('wrape-active-header')
    });

    $('.select').click(function() {
        if(!$(this).hasClass('select-active')) {
            $('.filter').removeClass('filter-active')
        }
        $(this).parent().children('.select__options').toggleClass('select__options-active');
        $(this).toggleClass('select-active')
    });

    $('.select__option').click(function() {
        $(this).parents('.select__container').children('.select').toggleClass('select-active');
        $(this).parents('.select__container').find('span').html($(this).html());
        $(this).parents('.select__options').toggleClass('select__options-active');
    });

    $('.filter__accordeon-item').click(function() {
        console.log($(this))
        $(this).children('.filter__accordeon-checkbox').toggleClass('filter__accordeon-checkbox-active');
    });

    $('.filter__accordeon-title').click(function() {
        $(this).parents('.filter__accordeon').find('.filter__accordeon-items').toggleClass('filter__accordeon-items-active');
        $(this).toggleClass('filter__accordeon-title-active')
    });
    
    $('.filter__accordeon-all').click(function() {
        $(this).parents('.filter__accordeon').find('.filter__accordeon-items-second').toggleClass('filter__accordeon-items-second-active');   
        if($(this).parents('.filter__accordeon').find('.filter__accordeon-items-second').hasClass('filter__accordeon-items-second-active')) {
            $(this).html('Скрыть')
        } else {
            $(this).html('Показать все')
        }
    });

    $('#catalogSpoilerToggle').click(function() {
        $(this).parents('.catalog__spoiler').find('.catalog__spoiler-content').toggleClass('catalog__spoiler-active');
        $(this).toggleClass('catalog__spoiler-btn-active')
    });

    
    if(window.innerWidth < 1200 && $('.tags')) {
        $('.tags').slick({
            variableWidth: true,
            slidesToShow: 1,
            swipeToSlide: true,
        });
    }

    $('.filter__title').click(function() {
        if(window.innerWidth < 992) {
            $('.filter').addClass('filter-active')
            if($('.filter').hasClass('filter-active')) {
                $('.select__options').removeClass('select__options-active')
                $('.select').removeClass('select-active')
            }
            $('.wrape').addClass('wrape-active')
        }
    });

    $('.filter__close').click(function() {
        if(window.innerWidth < 992) {
            $('.filter').removeClass('filter-active')
            if($('.filter').hasClass('filter-active')) {
                $('.select__options').removeClass('select__options-active')
                $('.select').removeClass('select-active')
            }
            $('.wrape').removeClass('wrape-active')
        }
    });

    if($('.filter__btn-first')) {
        $('.filter__btn-first').click(function() {
            if(window.innerWidth < 992) {
                $('.filter').removeClass('filter-active')
            }
        });
    }

    if($('.product__slider-for')) {
        $('.product__slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.product__slider-nav',
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                  }
                },
            ]
        });
        $('.product__slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product__slider-for',
            dots: false,
            arrows: true,
            focusOnSelect: true
        });
    };

    $('.product__spoiler-btn').click(function() {
        $(this).toggleClass('product__spoiler-btn-active');
        $(this).parents('.product__spoiler').find('.product__content-spoiler').toggleClass('product__content-spoiler-active');
        if($(this).hasClass('product__spoiler-btn-active')) {
            $(this).find('span').html('Скрыть')
        } else {
            $(this).find('span').html('Подробнее')
        }
    });

    
    if($('.product__content-items-first')) {
        $('.product__content-items-first').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                        slidesToShow: 2,
                    }
                },
                {
                  breakpoint: 575,
                  settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });

        if($('.product__content-items-second')) {
            $('.product__content-items-second').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                responsive: [
                    {
                      breakpoint: 991,
                      settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                      breakpoint: 575,
                      settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });
        }
    };

    $('.certificates__accordeon-title').click(function() {
        if(!$(this).parents('.certificates__accordeon').hasClass('certificates__accordeon-active')) {
            $('.certificates__accordeon').each(function() {
                $(this).removeClass('certificates__accordeon-active');
            })
        }
        $(this).parents('.certificates__accordeon').toggleClass('certificates__accordeon-active');
    })

    $('.certificates__accordeon-subtitle').click(function() {
        if(!$(this).parents('.certificates__accordeon-content-item').hasClass('certificates__accordeon-content-item-active')) {
            $('.certificates__accordeon-content-item').each(function() {
                $(this).removeClass('certificates__accordeon-content-item-active');
            })
        }
        $(this).parents('.certificates__accordeon-content-item').toggleClass('certificates__accordeon-content-item-active');
    })

    $('.tags__item').click(function() {
        if($(this).attr('data-tag')) {
            let tag = $(this).attr('data-tag')
            $($('.certificates__accordeon')).each(function() {
                $(this).css('display', 'none')
                $(this).removeClass('certificates__accordeon-active');
                if($(this).attr('id') == tag) {
                    $(this).css('display', 'block')
                    $(this).addClass('certificates__accordeon-active');
                }
            })
            if(tag == 'all') {
                $($('.certificates__accordeon')).each(function() {
                    $(this).css('display', 'block')
                    $(this).removeClass('certificates__accordeon-active');
                })
                $('.tags__item').each(function() {
                    $(this).removeClass('tags__item-active')
                })
                $(this).addClass('tags__item-active')
            } else {
                if($(this).hasClass('tags__item-active')) {
                    $(this).removeClass('tags__item-active')
                    $('.tags__item-all').addClass('tags__item-active')
                    $($('.certificates__accordeon')).each(function() {
                        $(this).css('display', 'block')
                        $(this).removeClass('certificates__accordeon-active');
                    })
                } else {
                    $('.tags__item').each(function() {
                        $(this).removeClass('tags__item-active')
                    })
                    $(this).addClass('tags__item-active')
                }
            }
        }
    })

});