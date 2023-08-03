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