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