let resposta = document.getElementById('resultado')
function verificarDevs(){

// infos
let clt, estagiarios, pj
let totalDevs
let mensagem = ''

// leituras
clt = Number(prompt("Quantos devs CLT?: "))
estagiarios = Number(prompt("Quantos estagiários?: "))
pj = Number(prompt("Quantos devs PJ?: "))

totalDevs = clt + estagiarios + pj

if(clt >= (totalDevs / 2)) {
    // bateu a quantidade funcionarios
    mensagem = 'Batemos a quantidade de funcionarios necessaria' + totalDevs + "<br>"
}else{
  // não bateu o minimo de funcionarios
  mensagem = " Não bateu o numero de clt necessario"
} 

// saídas
resposta.innerHTML = "Total de desenvolvedores: " + totalDevs + "<br>" + mensagem


}


