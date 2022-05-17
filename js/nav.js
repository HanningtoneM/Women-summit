const menuIcon = document.querySelector('.mobileNav');
const mobileMenu = document.querySelector('.mobileMenu');
const closeMenu = document.querySelector('.close-icon');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.menuList').forEach((menuList) => {
  menuList.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});