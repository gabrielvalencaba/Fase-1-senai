let resposta = document.getElementById('resultado')

function JaulaJunin(){
// INFORMAÇÔES
let horario_atual, visitantes_na_area

//entrada
horario_atual = Number(prompt("Qual o horário atual?"))
visitantes_na_area = Number(prompt("Quantos visitantes possuem na área?"))

//proessamento

//saída
if(visitantes_na_area == 0 && (horario_atual < 8 || horario_atual > 18)){
    resposta.innerHTML = ("Liberação autorizada. Abrindo jaula.")    
}else{
    resposta.innerHTML = ("Liberação negada. Jaula fechada")    
}




}
