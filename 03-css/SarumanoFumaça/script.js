function SarumanoFumaça(){
    let resposta = document.getElementById('resultado')
 //INFORMAÇÔES
    let criancas_pequenas, velocidade_vento

    //ENTRADA
    criancas_pequenas = Number(prompt("Qual o total de crianças na festa?"))
    velocidade_vento = Number(prompt("Qual a velocidade do vento no momento?"))

    //SAÌDA
    if(criancas_pequenas == 0 && velocidade_vento >= 0.5){
        document.getElementById("resultado").innerHTML = ("Fumaça liberada.")
    }else{
        document.getElementById("resultado").innerHTML = ("Fumaça bloqueada.")
    }}

