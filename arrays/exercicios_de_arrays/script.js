// Exercicios {0067}

const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
const copiaSemana = []

function inverterArray(){
    while(diasDaSemana.lengh > 0){ // inverter a semana
        let removido = diasDaSemana.pop()
        copiaSemana.push(removido)
    }
    console.log(diasDaSemana);
    console.log(copiaSemana);
}

function adicionarFeriado(){
    let Feriado  //adicionar feriado

    do{
        Feriado = prompt("Nome do feriado:")
    }while(Feriado == '')

}
function removerUltimo(){
    Feriado.pop()          // remover o ultimo dia da semana

    verFeriado() // atualiza a lista na tela
}