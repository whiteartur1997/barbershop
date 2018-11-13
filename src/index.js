const navBtnOpen = document.querySelector('.nav__btn--open');
const navBtnClose = document.querySelector('.nav__btn--close');
const nav = document.querySelector('.nav__list');

navBtnOpen.addEventListener('click', () => {
  nav.classList.add('nav__list--active');
});

navBtnClose.addEventListener('click', () => {
  nav.classList.remove('nav__list--active');
});