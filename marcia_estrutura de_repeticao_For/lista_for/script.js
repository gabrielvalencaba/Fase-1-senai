//1. Utilize um for para calcular a soma dos números de 1 até 10 e exiba o resultado.

// Iniciar uma variável para guardar o resultado da soma
let soma = 0;

//  O 'for' começa em 1, vai até 10 (i <= 10) e avança de 1 em 1 (i++)
for (let i = 1; i <= 10; i++) {
    soma = soma + i; // Adiciona o valor atual de 'i' à soma
}

// Exibe o resultado final
console.log("A soma dos números de 1 até 10 é:", soma);

//2. Crie um programa que mostre a tabuada do número 5, de 5 × 1 até 5 × 10, utilizando um for.