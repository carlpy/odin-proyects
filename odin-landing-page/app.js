const burger = document.querySelector('.burger');
const navigation = document.querySelector('.hero-header__md-nav');

const body = document.querySelector('body');

burger.addEventListener('click', () => {
  navigation.classList.toggle('show');
  burger.classList.toggle('pressed');
}) 

console.log('hello world');