let totalPaginas = 0;

function registrarPagina(valorRecebido){
  totalPaginas = totalPaginas + valorRecebido;
  document.getElementById("TotalPaginas").innerHTML = totalPaginas;
}
function zerarPaginas() {
    totalPaginas = 0;
    document.getElementById("TotalPaginas").innerHTML = totalPaginas;
}
function adicionarDoInput() {
  let valorDigitado = document.getElementById("inputDados").value;
  
  totalPaginas = totalPaginas + Number(valorDigitado);
  
  document.getElementById("TotalPaginas").innerHTML = totalPaginas;
}