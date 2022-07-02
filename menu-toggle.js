const menuButton = document.querySelector('.page-header__menu-btn');
const menu = document.querySelector('.page-nav');

menuButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.toggle('closed');
});