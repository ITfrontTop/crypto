'use strict';

// slider
const sliderMain = new Swiper('.header__content-container', {
    // effect: 'coverflow',
    // depth: 100,
    // rotate: 100,
    // slideShadows: true,

    speed: 1000,
    slidesPerView: 1,
    initialSlide: 1,
    spaceBetween: 24,
    centeredSlides: true,

    breakpoints: {
        720: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        
        1240: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// увеличения цифр
// const time = 3000;
// const step = 1;

// function outNum(num, elem) {
//     let e = document.querySelector(`${elem}`);
//     n = 0;
//     let t = Math.round(time / (num / step));
//     let interval = setInterval(() => {
//         n = n + 5;
//         if (n === num) {
//             clearInterval(interval);
//         }
//         e.innerHTML = n;
//     }, t)
// }

// outNum(10, '.header__well-name');


// faq section
function resetAccord() {
    faqTitles.forEach(item => {
        item.classList.remove('open');
    })
    faqContents.forEach(item => {
        item.classList.remove('open');
    })
}

// questions
const faqQuestions = document.querySelectorAll('.faq__questions-finance-box');
const faqTitles = document.querySelectorAll('.faq__question-finance-title');
const faqContents = document.querySelectorAll('.faq__question-finance-content');


faqQuestions.forEach((item) => {
    const questionFinanceTitle = item.querySelector('.faq__question-finance-title');
    const questionFinanceContent = item.querySelector('.faq__question-finance-content');

    questionFinanceTitle.addEventListener('click', () => {
        resetAccord();
        questionFinanceTitle.classList.toggle('open');
        questionFinanceContent.classList.toggle('open');
    })
})

// categories item
const faqItems = document.querySelectorAll('[data-tab]');
const faqContent = document.querySelectorAll('[data-tab-content]');

faqItems.forEach(function(item) {
    item.addEventListener('click', function() {

        resetAccord();

        faqItems.forEach((item) => {
            item.classList.remove('faq__categories-item--active');
        })
        item.classList.add('faq__categories-item--active');

        faqContent.forEach((item) => {
            item.classList.add('hidden');
        })
        const contentBox = document.querySelector('#' + this.dataset.tab)
        contentBox.classList.remove('hidden')
    })
})

// btn menu
const btnMenu = document.querySelector('.header__menu-btn');
const menuList = document.querySelector('.header__nav-items');

btnMenu.addEventListener('click', () => {
    menuList.classList.toggle('header__nav-items--active');
})

// Запуск анимации при скроле
document.addEventListener('DOMContentLoaded', () => {
    const scrollItems = document.querySelectorAll('section');
    console.log(scrollItems)
    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scrollItems.forEach(el => {
            // Вычисляем чтобы выполнялись действия поцентру то в конце будет 2, а так будет ниже центра 4
            let scrollOffset = el.offsetTop + (el.offsetHeight / 4);
            // Если окно будет находить по центру то будет запускаться анимация
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation-class')
            } else {
                el.classList.remove('animation-class')
            }
        });
    };
    scrollAnimation()

    window.addEventListener('scroll', () => {
        scrollAnimation()
    });
});


