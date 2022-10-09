const three = document.querySelector('.navbar_three');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

three.addEventListener('click', () => {
 menu.classList.toggle('active');
 icons.classList.toggle('active');
});

document.querySelector('body').style.backgroundColor = '#151515';