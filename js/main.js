// console.log('js');
const searchEl = document.querySelector('.search');
const serarchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  serarchInputEl.focus();
});

serarchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  serarchInputEl.setAttribute('placeholder', '통합검색');
});

serarchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  serarchInputEl.setAttribute('placeholder', '');
});