let multiplicador = 1; // Controle

// Usuario escolhe
let numero = Number(prompt("Qual tabuada você deseja ver?")); 

while (multiplicador <= 10) {
    let resultado = numero * multiplicador;
    console.log(numero + " x " + multiplicador + " = " + resultado);
    
    multiplicador++; // para não ter loop infinito
}