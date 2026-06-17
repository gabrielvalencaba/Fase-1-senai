let multiplicador = 1; //  controle
let numero = 5;        // Tabuada do 5

while (multiplicador <= 10) {
    let resultado = numero * multiplicador;
    console.log(numero + " x " + multiplicador + " = " + resultado);
    
    multiplicador++; //  para não ter loop infinito
}
