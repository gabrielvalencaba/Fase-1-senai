let resposta = document.getElementById('resultado')

function calcularParImpar(){
    let n = Number(prompt("Digita um número:"))
    if(n%2 == 0){
        alert("Par")
    }else{
        alert("Ímpar")
    }
}
