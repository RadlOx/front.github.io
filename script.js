var paneSotto = document.getElementById ('parallax-img1');
var lattuga = document.getElementById ('parallax-img2');
var carne = document.getElementById ('parallax-img3');
var formaggio = document.getElementById ('parallax-img4');
var pomodoro = document.getElementById ('parallax-img5');
var cipolla = document.getElementById ('parallax-img6');
var paneSopra = document.getElementById ('parallax-img7');
var scritta = document.getElementById ('parallax-img8');
var secHamb = document.getElementById ('sec-hamburger');
var txtIng = document.getElementById('txt-box');


window.addEventListener('scroll', () => {
	let value = window.scrollY;

	if ( value<180) {
		paneSotto.style.top = value * 2.3 + 'px';
		lattuga.style.top = value * 2.1 + 'px';
		carne.style.top = value * 1.7 + 'px';
		formaggio.style.top = value * 1.4 + 'px';
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
		txtIng.style.transform = "translateX(0%)"
		scritta.style.display = "none";
	}
	else {
		secHamb.style.transform = "translateX(0%)";
		scritta.style.display = "block";
		txtIng.style.transform = "translateX(-100%)"


	}
})