const input = document.getElementById("input-search");
input.addEventListener("keyup", autocomplete)
const risultati = document.getElementById("search-resoult");
const nomi = [
	"andrea",
	"luca",
	"marco",
	"cristian",
	"antonio",
	"alessio",
	"enrica",
	"martina",
	];

	function autoCompleteMatch(valore){
		if ( valore == "") return []
		const reg = new RegExp(valore)
		return nomi.filter(nome => {
			if (nome.match(reg)) return nome
		})
	}

	function autocomplete(event){
		let nomiConsigliati = ""
		const nomi = autoCompleteMatch(event.target.value)
		nomi.forEach((nome)=>{
			nomiConsigliati += `<li onclick="seleziona(event)">${nome}</li>`
		})
		risultati.innerHTML = `<ul>${nomiConsigliati}</ul>`
	}
	function seleziona(event) {
		risultati.innerHTML = ""
		input.value = event.target.textContent 
	}