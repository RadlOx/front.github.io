window.addEventListener('scroll', function() {
	document.querySelector('box-icon').style.translateX = "(70px)";

  });
  

//* riempimento header	
	var check = document.getElementById("check-menu");
	var header = document.querySelector("header");
	var body = document.querySelector("body");

	function riempHead(){
		if (check.checked == true) {
			header.style.transition = "all .25s";
			header.style.backgroundColor ="#181818";
			body.style.overflow = "hidden";

		}
		else {
			header.style.backgroundColor ="transparent";
			body.style.overflow = "scroll";

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
	  