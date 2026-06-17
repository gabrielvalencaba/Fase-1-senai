let soma = 0;
let i = 1; // Começa na primeira repetição


while (i <= 100) { 
    //  Pede o número para o usuário e converte para tipo numérico
    let numero = Number(prompt("Digite o " + i + "º número para a soma: "));
    
    //  Soma o número digitado
    soma += numero; 
    
    //  repetição
    i++; 
}

document.getElementById("total").innerHTML = "<h3>A soma total é: " + soma + "</h3>";