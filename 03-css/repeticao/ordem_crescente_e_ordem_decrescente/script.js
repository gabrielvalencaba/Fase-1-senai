
const tela = document.getElementById("resultado");
let conteudo = ""; 

// Ordem crescente (1 a 10)
let crescente = 1;

while (crescente <= 10) {
  conteudo += crescente + "\n";
  crescente++;
}

// Ordem decrescente (10 a 1)
let decrescente = 10;
conteudo += "Ordem decrescente:\n";

while (decrescente >= 1) {
  conteudo += decrescente + "\n";
  decrescente--;
}
// texto
tela.textContent = conteudo;