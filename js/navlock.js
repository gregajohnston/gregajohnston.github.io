$(window).scroll(function() {
    var currentPosition = $(window).scrollTop();
    var startFixedNav = $('#body_wrapper').offset().top;
    $('#nav_wrapper').toggleClass('scroll-lock', currentPosition > startFixedNav);
});
