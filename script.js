	// SCRIPT AUTOPLAY VIDEO  
const video = document.getElementById("slide-main1")
	if(video.muted){
	video.muted = false;
} else {
	debugger;
	video.muted = true;
	video.play()
}

