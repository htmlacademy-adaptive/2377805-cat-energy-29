let mainHeadContainer = document.querySelector('.main-header__container');
let navMain = document.querySelector('.header-nav__list');
let navToggle = document.querySelector('.main-header__toggle');

mainHeadContainer.classList.remove('main-header__container--nojs');
navMain.classList.remove('header-nav__list--nojs');
navToggle.classList.remove('main-header__toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-nav__list--closed')) {
    navMain.classList.remove('header-nav__list--closed');
    navMain.classList.add('header-nav__list--opened');
  } else {
    navMain.classList.add('header-nav__list--closed');
    navMain.classList.remove('header-nav__list--opened');
  }
});

let navToggleLine = document.querySelector('.main-header__toggle-line');

navToggle.addEventListener('click', function(){
  navToggleLine.classList.toggle('main-header__toggle-line--active')});
