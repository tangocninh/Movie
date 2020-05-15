$(document).ready(function() {
    $('.list-poter-tvshow').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
        mobileFirst: true,
        arrows: false,
    });
});
$(document).ready(function() {
    $('.banner-movie').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
$(document).ready(function() {
    $('.slider-show-mv').slick({
        dots: true,
        mobileFirst: true,
        arrows: false,
        // slidesToShow: 5,
        // slidesToScroll: 3,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    // infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 750,
                settings: {
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

        ]

    });
});




$('.video').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.video',
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
});
$('.slider-trailer-menu').slick();
$(window).scroll(function(event) {
    /* Act on the event */
    var scrollPos = $(window).scrollTop(),
        header = $('header');
    //sticky for menu
    if (scrollPos > 250) {
        header.addClass('position-fixed ');
    } else {
        header.removeClass('position-fixed ');
    }
});
var clickMenubtn = $('.nav-icon1');
clickMenubtn.on('click', function() {
    $(this).toggleClass('open');
});