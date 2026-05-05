let resposta = document.getElementById('resultado')

function verificarLetra(){
    //entradas
    let letra = prompt("Digite apenas uma letra:");
    // validação
    if (!letra || letra.length !== 1) {
        resposta.innerHTML = "Por favor, digite exatamente uma letra.";
        return;
    }

    // processamentos 
    if (letra === letra.toUpperCase ()) {
        resposta.innerHTML = 'A letra é Maiúscula.';
    } else {
        resposta.innerHTML = 'A letra é minúscula.'
    }
}