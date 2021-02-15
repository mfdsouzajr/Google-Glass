function mudaFoto(foto) {
	document.getElementById('icone').src = foto;
}

function abrirFoto(foto) {
    window.open(foto);
}

function calculoPrecoTotal() {
    var qtde = parseFloat(document.getElementById("campoQtde").value);

    if (qtde >= 0) {
        var totalDolares = qtde * 1500.00;
        var totalReais = totalDolares * 5;   
    }
    else {
        totalDolares = totalReais = 0;
    }

    document.getElementById("campoPrecoTotalDolares").value = totalDolares;
    document.getElementById("campoPrecoTotalReais").value = totalReais;
}