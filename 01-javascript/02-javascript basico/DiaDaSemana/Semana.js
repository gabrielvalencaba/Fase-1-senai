let resposta = document.getElementById('resultado')

function mostrarDiasDaSemana(){
   // infos
   let numero, dia
   // leitura
   numero = Number(prompt("Digita o número: "))
   // processamento
   if (numero == 1) {
       dia = "Domingo";
   }else if(numero == 2){
     dia = "Segunda"
   }else if (numero == 3){
    dia = "Terça"
   }else if (numero == 4){
    dia = "Quarta"
   }else if (numero == 5){
    dia = "Quinta"
   }else if (numero == 6){
    dia = "Sexta"
   }else if (numero == 7){
    dia = "Sábado"
   }else{
       dia = "Erro #404, dia não encontrado."
   }
   
   // saídas
   document.getElementById('resultado').innerHTML = "dia escolhido: " + dia
}