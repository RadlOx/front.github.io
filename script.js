	// SCRIPT AUTOPLAY VIDEO  
function toggleMute() {
		
	var video = document.getElementById("slide-main1")

	if(video.muted){
	  video.muted = false;
	} else {
	  debugger;
	  video.muted = true;
	  video.play()
	}
} 
  /////////////////////////

  	//SCRIPT SLIDE MAIN 

var n_slide = 4;
var corrente = 1;

function succ(){
	corrente++;
	if (corrente > n_slide) {
		corrente=1 ;
	}
	for (var i = n_slide; i>0;i--){
		document.querySelector(".slider-main:nth-child("+ i + ")").style.display = "none";
	}
	document.querySelector(".slider-main:nth-child("+ corrente + ")").style.display = "block";
}

function precc(){
	corrente--;
	if (corrente ==0) {
		corrente= n_slide ;
	}
	for (var i = n_slide; i>0;i--){
		document.querySelector(".slider-main:nth-child("+ i + ")").style.display = "none";
	}
	document.querySelector(".slider-main:nth-child("+ corrente + ")").style.display = "block";
}