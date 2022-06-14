function chamar_api() {
    fetch('https://api-football-standings.azharimm.site/leagues')
        .then(response => response.json())
        .then(data => exibir_imagem(data));
}

function exibir_imagem(data) {
    const codigo = document.getElementById('numero').value
    console.log(data.data)
    document.getElementById("img").value = data.data[codigo].name;
    document.getElementById("tst").src = data.data[codigo].logos.light;
}
