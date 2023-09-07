// Реализация меню в мобильной версии сайта

let mainHeadContainer = document.querySelector('.main-header__container');
let navMain = document.querySelector('.header-nav__list');
let headerNav = document.querySelector('.header-nav');
let navToggle = document.querySelector('.main-header__toggle');

mainHeadContainer.classList.remove('main-header__container--nojs');
navMain.classList.remove('header-nav__list--nojs');
headerNav.classList.remove('header-nav--nojs');
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

// Оживление слайдера

const slider = document.querySelector('.slider');
const before = document.querySelector('.slider__before');
const beforeImage = document.querySelector('.slider__image--before');
const button = document.querySelector('.slider__button');
const body = document.body;

let isActive = false;

button.addEventListener('mousedown', () => {
  isActive = true;
});

body.addEventListener('mouseup', () => {
  isActive = false;
});

body.addEventListener('mouseleave', () => {
  isActive = false;
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = `${shift}px`;
  button.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

body.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

button.addEventListener('touchstart', () => {
  isActive = true;
});

body.addEventListener('touchend', () => {
  isActive = false;
});

body.addEventListener('touchcancel', () => {
  isActive = false;
});

body.addEventListener('touchmove', (e) => {
  if (!isActive) {
    return;
  }

  let x;

  let i;
  for (i = 0; i < e.buttondTouches.length; i++) {
    x = e.buttondTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;

  beforeAfterSlider(x);
  pauseEvents(e);
});
