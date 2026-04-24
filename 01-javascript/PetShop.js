let precoPorQuilo = 10;
let procoPorGrama = precoPorQuilo  / 1000;
let peso;
let precoTotal;

peso = Numbe(promt("Digite o peso (g): "));

precoTotal = peso * precoPorGrama;

alert("Valor a pagar: R$ " + precoTotal.toFixed(2));
console.log("Valor a pagar: R$ " + precoTotal.toFixed(2));