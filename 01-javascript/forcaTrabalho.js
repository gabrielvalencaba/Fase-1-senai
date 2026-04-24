
// infos
let clt, estagiarios, pj
let totalDevs

// leituras
clt = Number(prompt("Quantos devs CLT?"))
estagiarios = Number(prompt("Quantos estagiários?"))
pj = Number(prompt("Quantos devs PJ?"))

// somamos todos os valores convertidos
totalDevs = clt + estagiarios + pj

// saídas
console.log("A força de trabalho total da Macrohard é: " + totalDevs)