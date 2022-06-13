function chamar_api(){
  fetch('https://nekos.best/api/v2/neko')
  .then(response => response.json())
  .then(data => exibir_imagem(data))}

function exibir(data){
	document.getElementById("img").src = data.message;
}

