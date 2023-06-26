const btnMenu = document.querySelector('.icon-submenu-category');
const content = document.querySelector('.cont-sub-category');
const submenu = document.querySelector('.submenu-desk');

btnMenu.onclick = (() => {
	content.classList.toggle('show');
	btnMenu.classList.toggle('transf');
	submenu.classList.toggle('hidden');
});
