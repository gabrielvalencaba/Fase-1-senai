
function calcularChanceAprovacao(n) {
  const chancePercentual = (0.1 / (1 + 500 * n)) * 100;
  const umEmCada = 100 / chancePercentual;

  return {
    percentual: chancePercentual.toFixed(4) + "%",
    humano: Math.round(umEmCada)
  };
}

let nDoCandidato = 3; 
let resultado = calcularChanceAprovacao(nDoCandidato);

alert("Sua chance é de " + resultado.percentual);