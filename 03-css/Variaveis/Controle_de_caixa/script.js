let totalRecebido = 0,
    totalCelso = 0,
    totalSeguradora = 0,
    faturamentoSandro = 0,
    contador = 0,
    historico = [];
function cadastrarVenda() {
    let valor = parseFloat(document.getElementById("valor-venda").value);
    if (!valor || valor <= 0) return;
    const celso = document.getElementById("indicacao-celso").checked;
    const seguro = document.getElementById("venda-seguradora").checked;
    contador++;
    valor *= seguro ? 0.7 : 1;
    valor *= contador % 10 === 0 ? 0.95 : 1;
    const repasse = (!seguro && celso) ? valor * 0.1 : 0;
    totalRecebido += valor;
    totalCelso += repasse;
    totalSeguradora += seguro ? valor : 0;
    faturamentoSandro += valor - repasse;
    historico.push(`Cliente #${contador}: R$ ${valor.toFixed(2)}`);
    atualizar();
}
function desfazUltimaVenda() {
    historico.pop();
    location.reload(); 
}
function atualizar() {
    document.getElementById("total-vendas").innerText = totalRecebido.toFixed(2);
    document.getElementById("total-celso").innerText = totalCelso.toFixed(2);
    document.getElementById("total-seguradora").innerText = totalSeguradora.toFixed(2);
    document.getElementById("faturamento-sandro").innerText = faturamentoSandro.toFixed(2);
    document.getElementById("lista-vendas").innerHTML =
        historico.map(v => `<li>${v}</li>`).join('');
}