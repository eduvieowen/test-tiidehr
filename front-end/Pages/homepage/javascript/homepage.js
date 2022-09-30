// Initialize Animate on Scroll Library
  AOS.init();

  // SWIPER JS CAROUSEL FUNCTIONALITY
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // autoplay: true,
    loop: true,

    autoplay: {
        delay: 4000,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });

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
  
