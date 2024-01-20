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






const criaTitulo = () => {
	$('.titulo').html( "Soneto de " + tituloSubstantivo() + " " + tituloAdjetivo())
}

const criaSoneto = () => {
	criaTitulo();
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



const tituloSubstantivo = () => {
	let lista = ["Carnaval", "Festerê", "Alalaô", "Bloquinho", "Beijo", "Samba", "Gingado", "Rebolado"]
	return lista[Math.floor(Math.random()*lista.length) ];
}

const tituloAdjetivo = () => {
	let lista = ["Maluco", "Inesquecível", "Sensual", "Gostoso", "Quente", "Apimentado", "de Dendê"]
	return lista[Math.floor(Math.random()*lista.length) ];
}

const verboInfinitivo = () => {
	let lista = ["amar", "beijar", "curtir", "viver", "contar", "dançar", "sambar", "sonhar", "buscar", "fritar", "rebolar", "festejar", "lamber", "namorar"];
	return lista[Math.floor(Math.random()*lista.length) ];
}

const verboConjugado = () => {
	let lista = ["quero", "vou", "preciso", "desejo", "espero", "nasci para", "amo", "anseio", "existo para", "confesso"]
	return lista[Math.floor(Math.random()*lista.length) ];
}

const substantivo = () => {
	let lista = ["folia", "festa", "farra", "no bloco", "confete", "serpentina", "arlequim", "colombina", "abadá", "trio", "samba", "lambida", "rolê"]
	return lista[Math.floor(Math.random()*lista.length) ];
}




const verso = () => {
	return verboConjugado() + " " + verboInfinitivo() + " " + substantivo() + "\n"
}

