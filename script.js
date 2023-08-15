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

function changeColor(){
	var icon = document.getElementById("login-icon");

	icon.classList.toggle("colors");
}

// SCRIPT CARD


