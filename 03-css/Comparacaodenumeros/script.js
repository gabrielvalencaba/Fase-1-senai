function verificarParImpar() {
    let resposta = document.getElementById('resultado');
    
    // Entrada
    let numero = Number(prompt("Digite um número:"));

    // Processamento (%)
    if (numero % 2 === 0) {
        // Se o resto da divisão por 2 for 0
        resposta.innerHTML = `O número ${numero} é PAR.`;
    } else {
        // Se o resto for qualquer outra coisa
        resposta.innerHTML = `O número ${numero} é ÍMPAR.`;
    }
}