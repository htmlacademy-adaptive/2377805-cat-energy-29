document.querySelector('.main-header__toggle').addEventListener('click', function(){
  document.querySelector('.main-header__toggle-line').classList.toggle('main-header__toggle-line--active')});

let navMain = document.querySelector('.header-nav__list');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('header-nav__list--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-nav__list--closed')) {
    navMain.classList.remove('header-nav__list--closed');
    navMain.classList.add('header-nav__list--opened');
  } else {
    navMain.classList.add('header-nav__list--closed');
    navMain.classList.remove('header-nav__list--opened');
  }
});
