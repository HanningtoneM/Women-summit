const menuIcon = document.querySelector('.mobileNav');
const mobileMenu = document.querySelector('.mobileMenu');
const closeMenu = document.querySelector('.close-icon');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});