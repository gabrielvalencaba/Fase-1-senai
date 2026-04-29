function calcularCusto(caracteres, custoToken) {
  const totalTokens = 5 + caracteres;
  const custoTotal = totalTokens * custoToken;

  return {
    totalTokens,
    custoTotal
  };
}

// exemplo
const resultado = calcularCusto(10, 0.02);
console.log(resultado);