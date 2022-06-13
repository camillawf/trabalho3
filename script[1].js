function chamar_api(){
  fetch('https://nekos.best/api/v2/neko')
  .then(response => response.json())
  .then(data => exibir_imagem(data))}

 function imagem(data){
        console.log(data)
}

