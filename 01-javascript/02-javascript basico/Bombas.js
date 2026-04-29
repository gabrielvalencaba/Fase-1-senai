
function calcularBombas(shows, preco) {
  const bombas = shows * 7;
  const custoTotal = bombas * preco;

  return {
    bombas,
    custoTotal
  };
}

// exemplo
const resultado = calcularBombas(3, 12.5);
console.log("Bombas:", resultado.bombas);
console.log("Custo: R$", resultado.custoTotal.toFixed(2));