//* apertura pagine navbar tramite radio
	var page0 = document.getElementById("page0");
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");
	var page4 = document.getElementById("page4");
	var page5 = document.getElementById("page5");
	var icon0 = document.getElementById("page-icon0");
	var icon1 = document.getElementById("page-icon1");
	var icon2 = document.getElementById("page-icon2");
	var icon3 = document.getElementById("page-icon3");
	var icon4 = document.getElementById("page-icon4");
	var icon5 = document.getElementById("page-icon5");
	var ulMenu = document.getElementById("navbar_menu");

	openPage0();


	function openPage0(){
		
		page1.style.display ="none";
		page2.style.display ="none";
		page3.style.display ="none";
		page4.style.display ="none";
		icon0.style.borderRadius = "5px";
		icon0.style.backgroundColor = "#c28a21";
		icon1.style.backgroundColor = "#63636343";
		icon2.style.backgroundColor = "#63636343";
		icon3.style.backgroundColor = "#63636343";
		icon4.style.backgroundColor = "#63636343";
		icon1.style.borderRadius = "50%";
		icon2.style.borderRadius = "50%";
		icon3.style.borderRadius = "50%";
		icon4.style.borderRadius = "50%";

	}

	function openPage1(){

		if (page1.style.display = "none") {
				page2.style.display ="none";
				page3.style.display ="none";
				page4.style.display ="none";
				page1.style.display ="block";
				icon1.style.borderRadius = "5px";
				icon1.style.backgroundColor = "#c28a21";
				icon2.style.backgroundColor = "#63636343";
				icon3.style.backgroundColor = "#63636343";
				icon4.style.backgroundColor = "#63636343";
				icon0.style.backgroundColor = "#63636343";
				icon0.style.borderRadius = "50%";
				icon2.style.borderRadius = "50%";
				icon3.style.borderRadius = "50%";
				icon4.style.borderRadius = "50%";
		}
		else {
			page1.style.display ="none";

		}
	}

	function openPage2(){

		if (page2.style.display = "none") {
			page1.style.display ="none";
			page3.style.display ="none";
			page4.style.display ="none";
			page2.style.display ="block";
			icon1.style.borderRadius = "50%";
			icon2.style.borderRadius = "5px";
			icon1.style.backgroundColor = "#63636343";
			icon2.style.backgroundColor = "#f5af169d";
			icon3.style.backgroundColor = "#63636343";
			icon4.style.backgroundColor = "#63636343";
			icon0.style.backgroundColor = "#63636343";
			icon3.style.borderRadius = "50%";
			icon4.style.borderRadius = "50%";
			icon0.style.borderRadius = "50%";

		}
		else {
			page2.style.display ="none";
	
		}
	}

	function openPage3(){

		if (page3.style.display = "none") {
			page1.style.display ="none";
			page2.style.display ="none";
			page4.style.display ="none";
			page3.style.display ="block";
			icon1.style.borderRadius = "50%";
			icon2.style.borderRadius = "50%";
			icon3.style.borderRadius = "5px";
			icon1.style.backgroundColor = "#63636343";
			icon2.style.backgroundColor = "#63636343";
			icon3.style.backgroundColor = "#f5af169d";
			icon4.style.backgroundColor = "#63636343";
			icon0.style.backgroundColor = "#63636343";
			icon4.style.borderRadius = "50%";

			
		}
		else {
			page3.style.display ="none";
		}
	}

	function openPage4(){

		if (page4.style.display = "none") {
			page1.style.display ="none";
			page2.style.display ="none";
			page3.style.display ="none";
			page4.style.display ="block";
			icon1.style.borderRadius = "50%";
			icon2.style.borderRadius = "50%";
			icon3.style.borderRadius = "50%";
			icon4.style.borderRadius = "5px";
			icon1.style.backgroundColor = "#63636343";
			icon2.style.backgroundColor = "#63636343";
			icon3.style.backgroundColor = "#63636343";
			icon4.style.backgroundColor = "#f5af169d";
			icon0.style.backgroundColor = "#63636343";
			icon0.style.borderRadius = "50%";


		}
		else {
			page4.style.display = "none";
		}

		
	}

	

//* riempimento header	
	var check = document.getElementById("check-menu");
	var body = document.querySelector("body");
	var under = document.getElementById("under-menu");
	var menu = document.getElementById("navbar");
	

	function riempHead(){
		if (check.checked == true) {
			body.style.overflow = "hidden";
			under.style.transform = "translate(0%)";
			menu.style.transform = "translate(0%)";
			menu.style.transition = ".4s ease-in-out";
			under.style.transition = ".4s ease-in-out";
		}
		else {
			body.style.overflow = "scroll";
			under.style.transform ="translate(100%)";
			menu.style.transform = "translate(100%)";

		}
	}

	function pagesChange() {
		if(icon1.style.backgroundColor == "#f5af169d"){
			page1.style.transform = "translate(0%)";
		}
	}
	/********/

	/**///// */

	function toggleMute() {

		var video = document.querySelectorAll(".auto");

		// var video=document.getElementById("videoId1");
		// var video=document.getElementById("videoId2");
		// var video=document.getElementById("videoId3");
		// var video=document.getElementById("videoId4");
		// var video=document.getElementById("video-navbar1");

	  
		if(video.muted){
		  video.muted = false;
		} else {
		  debugger;
		  video.muted = true;
		  video.play()
		}
	  
	  }
	  

	  

	  //**slider  */

	  var n_img = 3;
	  var corrente = 1;
	  var btnSlider = document.querySelector(".slider-btn");

	  function succ(){
		corrente ++;
		if (corrente > n_img) {
			corrente=1;
		}
		for (var i = n_img; i > 0; i--){
			document.querySelector("#slider-cont video:nth-child("+ i +")").style.display = "none";
		}
		document.querySelector("#slider-cont video:nth-child("+ corrente +")").style.display = "block";
	  }

  function prec(){
	corrente --;
	if (corrente == 0) {
		corrente=n_img;
	}
	for (var i = n_img; i > 0; i--){
		document.querySelector("#slider-cont video:nth-child("+ i +")").style.display = "none";
	}
	document.querySelector("#slider-cont video:nth-child("+ corrente +")").style.display = "block";
}
function btnSlider() {
	btnSlider.style.display ="block";
}
setInterval(succ, 15000);
setTimeout(btnSlider, 1000);

