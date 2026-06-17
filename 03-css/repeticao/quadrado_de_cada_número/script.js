let i = 1 // Inicialização

while (i <= 10) { // repetir até a 10º vez
    //  Pede o número
    let numero = Number(prompt("Digite o " + i + "º número: "))
    
    // Calcula o quadrado do número digitado
    let quadrado = numero * numero
    
    //  Mostra o resultado
    console.log("O quadrado de " + numero + " é: " + quadrado)
    
    // Contagem:repetição
    i++ 
}