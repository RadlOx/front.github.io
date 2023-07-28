// const input = document.getElementById("input-search");
// input.addEventListener("keyup", autocomplete)
// const risultati = document.getElementById("search-resoult");
// const nomi = [
// 	"andrea",
// 	"luca",
// 	"marco",
// 	"cristian",
// 	"antonio",
// 	"alessio",
// 	"enrica",
// 	"martina",
// 	];

// 	function autoCompleteMatch(valore){
// 		if ( valore == "") return []
// 		const reg = new RegExp(valore)
// 		return nomi.filter(nome => {
// 			if (nome.match(reg)) return nome
// 		})
// 	}

// 	function autocomplete(event){
// 		let nomiConsigliati = ""
// 		const nomi = autoCompleteMatch(event.target.value)
// 		nomi.forEach((nome)=>{
// 			nomiConsigliati += `<li onclick="seleziona(event)">${nome}</li>`
// 		})
// 		risultati.innerHTML = `<ul>${nomiConsigliati}</ul>`
// 	}
// 	function seleziona(event) {
// 		risultati.innerHTML = ""
// 		input.value = event.target.textContent 
// 	}


	/**///// */

	function toggleMute() {

		var video=document.getElementById("videoId1");
		
	  
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
	  // secondo video
	  function toggleMute() {

		var video=document.getElementById("videoId2");
		
	  
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
	  
	  // terzo video 

	  function toggleMute() {

		var video=document.getElementById("videoId3");
		
	  
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

	  //

	  function toggleMute() {

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