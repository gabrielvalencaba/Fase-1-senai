let resposta = document.getElementById('resultado')

function verificarIdade(){
    // infos
    let idade
    // entradas
    idade = Number(prompt("Digite sua idade:"))
    // processamentos
    // saídas
    if(idade >=18){
        resposta.innerHTML = "Você é maior de idade"
    }else{
       resposta.innerHTML = "Você é menor de idade"
    }
}