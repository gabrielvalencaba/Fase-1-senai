let resposta = document.getElementById('resultado')
// let resposta01 = document.getElementById('resultado01')

function verificarMeta(){
    // infos
    let totalBruto, premiacoes, presentes, comissoes, lucro
    let meta
    // entradas
    totalBruto = Number(prompt("Total bruto: "))
    premiacoes = Number(prompt("Premiações: "))
    presentes = Number(prompt("Presentinhos: "))
    comissoes = Number(prompt("Comissões: "))
    meta = Number(prompt("Meta de hoje:"))
    // processamento
    lucro = totalBruto - premiacoes - presentes - comissoes
    let mensagem = ''
    if(lucro >= meta){
        // bateu a meta - 
        mensagem = '👵💹 Batemos a meta, lucro de R$' + lucro.toFixed(2).replace('.',',')
    }else{
        // não bateu a meta
        if(lucro > 0){
            // sem meta mas com lucro
            mensagem = '🤔 Não batemos a meta, mas tivemos lucro de R$' + lucro.toFixed(2).replace('.',',')
        }else{
            // sem meta e prejuízo
            let prejuizo = lucro * -1
            mensagem = '💀☠️💸Não batemos a meta e ainda tivemos prejuízo de R$' + prejuizo.toFixed(2).replace('.',',')
        }
    }
    // saídas
    resposta.innerHTML = "<br>Lucro de hoje: R$" + lucro.toFixed(2).replace('.',',') + 
    '<br>' + mensagem

    // let ponto = '.'
    // let virgula = ','
    // resposta.innerHTML = "Lucro de hoje: R$" + 
    // lucro.toFixed(2).replace(prompt("Digita o ponto aí pra mim"),prompt("E a vírgula?"))
}