


// let peso 

// let contador = 0
// peso = Number(prompt("Digite o peso:"))
// if(peso>1.1 || peso<0.9){
    // alert("Fora tolerância do peso")
// }

// let contador = 0
// while(contador < 10){
    // trampo
    
    // contador++

// }
let total = 0
let i = 0 // Inicialização

while(i < 3){ // repetir 3 vezes
    i++ // Contagem
    
    // O prompt na tela:
    let preco = Number(prompt("Digite o preço do " + i + "º Produto:"))
    
    total = total + preco
    
    // texto do HTML
    document.getElementById("total").innerHTML += i + "º Produto: R$ " + preco.toFixed(2) + "<br>"
}

// Mostra o total em um alerta na tela
alert("Total da compra: R$ " + total.toFixed(2))