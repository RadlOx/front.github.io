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
var circle2 = document.getElementById('circle-2');
var circleKcal = document.getElementById('circle-kcal');
var contKcal = document.getElementById('cont-kcal');
var circleProtein = document.getElementById('circle-protein');
var contProtein = document.getElementById('cont-protein');
var circleFat = document.getElementById('circle-fat');
var contFat = document.getElementById('cont-fat');
var ingr = document.getElementById('ingredienti');

window.addEventListener('scroll', () => {
	var value = window.scrollY;

	if (value<50) {
		paneSotto.style.top = value * 6 + 'px';
		lattuga.style.top = value *  5 + 'px';
		carne.style.top = value *  4 + 'px';
		formaggio.style.top = value *  3 + 'px';
		pomodoro.style.top = value *  2 + 'px';
		cipolla.style.top = value *  .8 + 'px';
		paneSopra.style.top = value *  -1 + 'px';
	}

	if (value>48) {
		circle1.style.top = '25%';
		circle1.style.transform = 'scale(1.7)';
		circle2.style.transform = 'scale(1.7)';
	}
	if (value>50) {
		box.style.transform = "translateX(50%)";
		scritta.style.transform = "translateX(-67%) translateY(-25%)";
		scritta.style.width = '60%';
		ingr.style.transform = 'translateX(0%) translateY(-5%)';
		circleKcal.style.transform = 'translateX(-35%) translateY(99%) scale(.7)';
		contKcal.style.opacity = '1';
		circleProtein.style.transform = 'translateX(-125%) translateY(195%) scale(1.05)';
		contProtein.style.opacity = '1';
		circleFat.style.transform = 'translateX(0%) translateY(445%) scale(1.05)';
		contFat.style.opacity = '1';
	}
	else {
		scritta.style.transform = "translateY(0%)";
		scritta.style.width = '100%';
		box.style.transform = "translateX(0%)";
		circle2.style.transform = 'scale(1)';
		circle2.style.transform = 'translateX(-30%)';
		circle1.style.transform = 'scale(1)';
		ingr.style.transform = 'translateX(-100%)';
		circleKcal.style.transform = 'translateX(0%) translateY(0%) scale(1)';
		contKcal.style.opacity = '0';
		circleProtein.style.transform = 'translateX(0%) translateY(0%) scale(1)';
		contProtein.style.opacity = '0';
		contProtein.style.backgroundColor = '#dba51c';

		circleFat.style.transform = 'translateX(0%) translateY(0%) scale(1)';
		contFat.style.opacity = '0';

	}
})

// SCRIPT MENU HEADER 

var menuIcon = document.getElementById('box-1');
var menuContainer = document.getElementById('box-icon-header');
var call = document.getElementById('call-us');
var closeMenu = document.getElementById('close-menu');
var list = document.getElementById('menu-icon');
var menuPage = document.getElementById('menu-page');
var boxSearch = document.getElementById('box-search');
var search = document.getElementById('search-bar');
var BoxMenu = document.getElementById('menu-cont');
var headSez1 = document.getElementById('header-sezione1');
var contSez1 = document.getElementById('cont-sez1');

list.addEventListener('click', () => {
	menuContainer.style.width = '90.5%';
	menuContainer.style.boxShadow = '0 0 14px 0 #33373e65';
	list.style.display = 'none';
	closeMenu.style.display = 'block';
	menuPage.style.maxHeight = '150vh';
	menuPage.style.borderBottom = '10px groove #dba51c';
	boxSearch.style.opacity = '1';
	BoxMenu.style.transform = 'translateX(0%)';
	headSez1.style.transform = 'translateX(0)';
	contSez1.style.transform = 'translateX(0)';
})

closeMenu.addEventListener('click', () => {
	menuContainer.style.width = '30%';
	menuContainer.style.boxShadow = ' 0 0 5px 10px #eaeaea14';
	list.style.display = 'block';
	closeMenu.style.display = 'none';
	menuPage.style.maxHeight = '0vh';
	menuPage.style.borderBottom = '0px';
	boxSearch.style.opacity = '0';
	BoxMenu.style.transform = 'translateX(200%)';
	headSez1.style.transform = 'translateX(-100%)';
	contSez1.style.transform = 'translateX(120%)';


})