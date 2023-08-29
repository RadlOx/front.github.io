// 	SCRIPT PARALLAX 

var paneSotto = document.getElementById('pane-sotto');
var lattuga = document.getElementById('lattuga');
var carne = document.getElementById('carne');
var formaggio = document.getElementById('formaggio');
var pomodoro = document.getElementById('pomodoro');
var cipolla = document.getElementById('cipolla');
var paneSopra = document.getElementById('pane-sopra');
var scritta = document.getElementById('txt-png');
var box = document.getElementById('parallax-container');
var circle1 = document.getElementById('circle-1');

window.addEventListener('scroll', () => {
	var value = window.scrollY;

	if (value<60) {
		paneSotto.style.top = value * 6 + 'px';
		lattuga.style.top = value *  5 + 'px';
		carne.style.top = value *  4 + 'px';
		formaggio.style.top = value *  3 + 'px';
		pomodoro.style.top = value *  2 + 'px';
		cipolla.style.top = value *  1 + 'px';
		paneSopra.style.top = value *  -1 + 'px';
	}

	if (value>58) {
		circle1.style.top = '25%';
		circle1.style.transform = 'scale(1.7)';
	}
	if (value>60) {
		box.style.transform = "translateX(50%)";
		scritta.style.transform = "translateX(-67%) translateY(-35%)";
		scritta.style.width = '80%';

	}
	else {
		scritta.style.transform = "translateY(0%)";
		scritta.style.width = '100%';
		box.style.transform = "translateX(0%)";
		circle1.style.transform = 'scale(1)';

	}
})

// SCRIPT MENU HEADER 

var menuIcon = document.getElementById('box-1');
var menuContainer = document.getElementById('box-icon-header');
var call = document.getElementById('call-us');
var closeMenu = document.getElementById('close-menu');
var list = document.getElementById('menu-icon');

menuIcon.addEventListener('click', () => {
	menuContainer.style.width = '95%';
	call.style.display = 'none';
	closeMenu.style.display = 'block';
})

closeMenu.addEventListener('click', () => {
	menuContainer.style.width = '30%';
	call.style.display = 'block';
	closeMenu.style.display = 'none';
})