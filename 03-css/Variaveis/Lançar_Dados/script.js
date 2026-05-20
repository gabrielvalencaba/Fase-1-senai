let total = 0;

function RolarDado(valorMaximo) {
    let resultado = Math.floor(Math.random() * valorMaximo) + 1;

    total = total + resultado;

    document.getElementById("totalRolagens").innerText = "Total das rolagens: " + total;
    document.getElementById("ultimoDado").innerText = "Último dado: " + resultado;
}

function resetar() {
    total = 0;

    document.getElementById("totalRolagens").innerText = "Total das rolagens: 0";
    document.getElementById("ultimoDado").innerText = "Último dado: Nenhum";
}