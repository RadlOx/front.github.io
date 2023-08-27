var paneSotto = document.getElementById ('parallax-img1');
var lattuga = document.getElementById ('parallax-img2');
var carne = document.getElementById ('parallax-img3');
var formaggio = document.getElementById ('parallax-img4');
var pomodoro = document.getElementById ('parallax-img5');
var cipolla = document.getElementById ('parallax-img6');
var paneSopra = document.getElementById ('parallax-img7');
var scritta = document.getElementById ('parallax-img8');
var secHamb = document.getElementById ('sec-hamburger');


window.addEventListener('scroll', () => {
	let value = window.scrollY;

	if ( value<180) {
		paneSotto.style.top = value * 2.5 + 'px';
		lattuga.style.top = value * 2 + 'px';
		carne.style.top = value * 1.5 + 'px';
		formaggio.style.top = value * 1.3 + 'px';
		pomodoro.style.top = value * 1 + 'px';
		cipolla.style.top = value * .7 + 'px';
	}

	if (value>100) {
		scritta.style.opacity = 0.1;
	}
	else {
		scritta.style.opacity = 1;
	}
	
	if (value>130) {
		secHamb.style.transform = "translateX(50%)";
		scritta.style.display = "none";
	}
	else {
		secHamb.style.transform = "translateX(0%)";
		scritta.style.display = "block";

	}
})