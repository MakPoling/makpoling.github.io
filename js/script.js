// Open and close nav bar
const toggler = document.getElementById('toggler');
const nav = document.getElementById('navbar');

toggler.addEventListener('click', () => {
  nav.classList.toggle('open');
});