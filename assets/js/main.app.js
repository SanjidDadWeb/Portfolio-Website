/* ======================== NAVBAR FIXED TOP ======================== */

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 140) {
        $('.navbar--body').addClass('fixed--top');
    } else {
        $('.navbar--body').removeClass('fixed--top');
    }
});

/* ======================== NAVBAR FIXED TOP ======================== */

/* ======================== HERO SECTION TYPED TEXT ======================== */

var typed = new Typed('#typed-text', {
    strings: ['Freelancer.', 'Web Developer.', 'Android Developer.', 'Photographer.'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    fadeOut: false,
    loop: true,
    smartBackspace: true,
});

/* ======================== HERO SECTION TYPED TEXT ======================== */
