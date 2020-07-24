// const buscaSoneto = async () => {
//   const response = await fetch('http://localhost:5000/');
//   const myJson = await response.json(); //extract JSON from the http response
//   console.log(myJson);
//   $('#poem').html(myJson.estrofe1 + myJson.estrofe2 + myJson.estrofe3 + myJson.estrofe4);
// }

window.onload = function() {
	criaSoneto();
}

$("#refresh").click(function() {
	criaSoneto();
});

const criaSoneto = () => {
	 $('#poem').html(estrofe1() + estrofe2() + estrofe3() + estrofe4())
}


const estrofe1 = () => {
	return verso()+ "<br>" + verso() + "<br>" + verso() + "<br>" + verso() + "<br> <br>"
}

const estrofe2 = () => {
	return verso()+ "<br>" + verso() + "<br>" + verso() + "<br>" + verso() + "<br> <br>"
}

const estrofe3 = () => {
	return verso()+ "<br>" + verso() + "<br>" + verso() + "<br> <br>"
}

const estrofe4 = () => {
	return verso()+ "<br>" + verso() + "<br>" + verso() + "<br> <br>"
}





const verboInfinitivo = () => {
	let lista = ["amar", "beijar", "ver", "viver", "contar", "dancar", "voar", "sonhar", "buscar"];
	return lista[Math.floor(Math.random()*lista.length) ];
}

const verboConjugado = () => {
	let lista = ["quero", "vou", "preciso", "desejo", "espero", "nasci para"]
	return lista[Math.floor(Math.random()*lista.length) ];
}

const substantivo = () => {
	let lista = ["pudim", "aipim", "ceu", "no beleleu", "pastel", "irmao do jorel", "doguinho", "passarinho", "carinho", "baixinho"]
	return lista[Math.floor(Math.random()*lista.length) ];
}



const verso = () => {
	return verboConjugado() + " " + verboInfinitivo() + " " + substantivo() + "\n"
}

