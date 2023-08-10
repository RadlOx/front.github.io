	// SCRIPT AUTOPLAY VIDEO  
function toggleMute() {
		
	var video = document.getElementById("")

	if(video.muted){
	  video.muted = false;
	} else {
	  debugger;
	  video.muted = true;
	  video.play()
	}
} 
  /////////////////////////

//   window.addEventListener('scroll', function(e) {
// 	if (window.scrollY > 10) {
// 		document.getElementById("under-bgc").classList.add ("scroll-down");
// 	}
// 	else {
// 		document.getElementById("under-bgc").classList.remove ("scroll-down");
// 	}
//   } )

function validate() {
	var inputName = document.getElementById("password").value;
	var checker = document.querySelector(".checker");

	if(inputName.value == "") {
		return false;
	}
	return true;
}


function openLogin() {
	var menuLogin = document.getElementById("container-login");

	menuLogin.style.display = "block";


}

function close() {
	var menuLogin = document.getElementById("container-login");
	var check = document.getElementById("check-login");

	menuLogin.style.display ="none";
}