let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
let main = document.getElementById('main');
let container = document.getElementById('container');
let logo = document.getElementById('logo');
// let darkmode = document.getElementById('darkmode-txt');
// let lightmode = document.getElementById('lightmode-txt');

moon.addEventListener ('click', () => {
	moon.style.transform = 'translateX(-155%)';
	sun.style.display = 'block';
	sun.style.transform = 'translateX(0%)';
	sun.style.backgroundColor = '#eaeaea';
	main.style.backgroundImage = 'radial-gradient(#eaeaea, #f5f5f5)';
	container.style.backgroundColor = '#f5f5f5';
	container.style.border = ' 3px solid #eaeaea';
	logo.style.color = '#000';
	// lightmode.style.display = 'block';
	// darkmode.style.display = 'none';
})
sun.addEventListener ('click', () => {
	sun.style.transform = 'translateX(100%)';
	moon.style.display = 'block';
	moon.style.transform = 'translateX(0%)';
	main.style.backgroundImage = 'radial-gradient(#2c2f35, #181a1f)';
	container.style.backgroundColor = '#181a1f';
	container.style.border = ' 3px solid #2c2f35';
	logo.style.color = '#eaeaea';
	// lightmode.style.display = 'none';
	// darkmode.style.display = 'block';

})
