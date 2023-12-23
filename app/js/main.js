'use strict';

const sliderMain = new Swiper('.header__content-container', {
    // effect: 'coverflow',
    // depth: 100,
    // rotate: 100,
    // slideShadows: true,

    speed: 1000,
    slidesPerView: 3,
    initialSlide: 1,
    spaceBetween: 24,
    centeredSlides: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

