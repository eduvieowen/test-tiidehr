var swiper = new Swiper(".swiper-container", {
    mousewheel: true,
    slidesPerView: 4.5,
    spaceBetween: 60,
    paginationClickable: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4000,
      },
    loopAdditionalSlides: 100,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },  
      breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
            // spaceBetween: 20
          },
        // when window width is >= 670px
        650: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 30
        },
    }, 

    // slideChange animation using animejs
    on: {
        slideChangeTransitionStart: function () {
            anime({
                targets: ".swiper-slide-active .tag",
                scale: [0.1, 1],
                opacity: [0, 1],
                easing: "easeInOutQuart",
            });
            anime({
                targets: ".swiper-slide-active img",
                scale: [0.5, 1],
                opacity: [0, 1],
                delay: 500,
                easing: "easeInOutQuart",
            });
            anime({
                targets: ".swiper-slide-active .elmt",
                translateY: [60, 1],
                delay: anime.stagger(170, {start: 300}),
                opacity: [0, 1],
                easing: "easeInOutQuart",
            });
            anime({
                targets: ".swiper-slide-active .role",
                translateY: [70, 1],
                delay: anime.stagger(190, {start: 900}),
                opacity: [0, 1],
                easing: "easeInOutQuart",
            });

        }
    }
})

// Initialize Animate on Scroll Library
AOS.init();

// Hamburger functionality
const navbar = document.querySelector('.navigation-mobile');
const navToggle = document.querySelector('.mobile-nav-toggle');
const body = document.querySelector('.body');
navToggle.addEventListener('click', () => {
const visibility = navbar.getAttribute('data-visible');
if (visibility === "false") {
  navbar.style.zIndex = '999'
  navbar.setAttribute("data-visible", true);
  navToggle.setAttribute("aria-expanded", true);
  body.style.overflow = 'hidden'
} else if (visibility === "true") {
  navbar.setAttribute("data-visible", false);
  navToggle.setAttribute("aria-expanded", false);
  body.style.overflow = 'visible'
}
})
