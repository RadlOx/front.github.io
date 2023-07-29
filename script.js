//* apertura pagine navbar tramite radio
	var radio1 = document.getElementById("radio-page1");
	var page1 = document.getElementById("page1");
	var icon1 = document.getElementById("page-icon1");
	var ulMenu = document.getElementById("navbar_menu")

	function openPage1(){
		if (radio1.checked == true) {
			page1.style.transform = "translate(0%)";
			menu.style.transform = "translate(-100%)";
			page1.style.transition = ".2s ease-in-out";
		}
		else {
			page1.style.transform = "translate(100%)";
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

		var video=document.getElementById("videoId1");
		var video=document.getElementById("videoId2");
		var video=document.getElementById("videoId3");
		var video=document.getElementById("videoId4");

	  
		if(video.muted){
		  video.muted = false;
		} else {
		  debugger;
		  video.muted = true;
		  video.play()
		}
	  
	  }
	  
	  $(document).ready(function(){
		setTimeout(toggleMute,3000);
	  })
	  