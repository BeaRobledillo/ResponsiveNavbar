// mostrar u ocultar hamburger
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav_link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});