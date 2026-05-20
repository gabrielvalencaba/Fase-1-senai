let caixaDonaBete = 0; 
const dinos = [
    "Espinossauro", "Velocirraptor", "Anquilossauro", "Carnotauro", "T-Rex", 
    "Estegossauro", "Parassaurolofo", "Braquiossauro", "Triceratopo", "Alossauro"
];

function ApostaDino(meuDino) {
    let aposta = parseFloat(document.getElementById("inputAposta").value);
    
    if (isNaN(aposta) || aposta <= 0) {
        return alert("Digite um valor de aposta válido!");
    }

    caixaDonaBete += aposta;
    let premio = aposta * 2;
    
    let sorteado = dinos[Math.floor(Math.random() * dinos.length)];

    if (meuDino === sorteado && premio > (caixaDonaBete * 0.20)) {
        sorteado = dinos.find(d => d !== meuDino);
        console.log("Prêmio muito alto, sorteio trocado.");
    }

    document.getElementById("ValorAposta").innerText = aposta.toFixed(2);
    document.getElementById("DinoApostado").innerText = meuDino;
    document.getElementById("DinoSorteado").innerText = sorteado;

    let mensagem = document.getElementById("MensagemFinal");

    if (meuDino === sorteado) {
        mensagem.innerText = "PARABÉNS! Você ganhou R$ " + premio.toFixed(2);
        mensagem.style.color = "green";
        caixaDonaBete -= premio;
    }else {
        mensagem.innerText = "PERDEU!";
        mensagem.style.color = "red";
    }
}