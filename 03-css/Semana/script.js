function verificarDia(){
    // infos
    let resposta = document.getElementById('resultado');
    
    // entradas
    dia = Number(prompt("Digite um número de 1 a 7:"));

    // processamentos e saídas
    if (dia === 1) {
        resposta.innerHTML = "É Segunda-feira";
    } else if (dia === 2) {
        resposta.innerHTML = "É Terça-feira";
    } else if (dia === 3) {
        resposta.innerHTML = "É Quarta-feira";
    } else if (dia === 4) {
        resposta.innerHTML = "É Quinta-feira";
    } else if (dia === 5) {
        resposta.innerHTML = "É Sexta-feira";
    } else if (dia === 6) {
        resposta.innerHTML = "É Sábado-feira";
    } else if (dia === 7) {
        resposta.innerHTML = "É Domingo!!!!!";
    } else {
        resposta.innerHTML = "Valor inválido"
       
    }
}