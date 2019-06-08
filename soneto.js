const buscaSoneto = async () => {
  const response = await fetch('http://localhost:5000/');
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson);
  $('#poem').html(myJson.estrofe1 + myJson.estrofe2 + myJson.estrofe3 + myJson.estrofe4);
}

window.onload = function() {
	buscaSoneto();
}

$("#refresh").click(function() {
	buscaSoneto();
});