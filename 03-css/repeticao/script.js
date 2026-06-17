


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

let i = 0 // inicialização
while(i < 3){ // cond repet
    i++ // contagem
    let preco = Number(prompt("Digite o preço do " + i + "º Produto: " ))
    total = total + preco
    // total += preco

    document.getElementById("total").innerHTML += i + "º Produto " + preco.toFixed(2) + "<br>"
}

alert(total)