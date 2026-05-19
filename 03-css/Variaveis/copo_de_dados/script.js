let pontosAcumulados = 0;
let historico = [];


let contagemDados = {
    4: 0,
    6: 0,
    10: 0,
    12: 0,
    20: 0
};

function rolarDado(lados) {
    pontosAcumulados += resultado;

    historico.push(`D${lados}(${resultado})`);
    contagemDados[lados]++;

    document.getElementById('resultadoDado').innerHTML = `D${lados} tirou ${resultado}`;
    document.getElementById('totalPontos').innerHTML = pontosAcumulados;

    document.getElementById('historicoRolagens').innerHTML = historico.join(', ');

    document.getElementById(`qtd-d${lados}`).innerHTML = contagemDados[lados];
}