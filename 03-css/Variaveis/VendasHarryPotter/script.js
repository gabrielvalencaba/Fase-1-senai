let listaDeVendas = [];

function cadastrarVenda() {
    const inputValor = document.getElementById('valor-venda');

    const valor = parseFloat(inputValor.value)

    if(isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor de venda válido!");
        return;
    }
    listaDeVendas.push(valor);
    inputValor.value = '';
    atualizaInterface();
}
function desfazerUltimaVenda() {
    if (listaDeVendas.length === 0) {
        alert("Não há nenhuma venda para desfazer!");
        return;
    }
    listaDeVendas.pop();
    atualizaInterface();
}
function atualizaInterface() {
    const elementoTotal = document.getElementById('total-vendas');
    const elementoLista = document.getElementById('lista-vendas');
    let total = 0;
    for (let i = 0; i < listaDeVendas.length; i++) {
        total += listaDeVendas[i];
    }
    elementoTotal.innerText = total.toFixed(2);
    elementoLista.innerHTML - '';
    listaDeVendas.forEach((venda, index) => {
        const itemLista = document.createElement('li');

        itemLista.innerText = `Venda ${index + 1}: R$ ${venda.toFixed(2)}`;

        elementoLista.appendChild(itemLista);
    }); 
}