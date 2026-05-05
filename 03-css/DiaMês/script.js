function determinarDiasNoMês() {
    let resposta = document.getElementById('resultado');
    
    // Entrada
    let mes = prompt("Digite o nome do mês:").toLowerCase().trim();

    // Processamento
    if (mes === "fevereiro") {
        resposta.innerHTML = "Fevereiro tem 28 dias (ou 29 em anos bissextos).";
    } 
    // Agrupando meses de 30 dias
    else if (mes === "abril" || mes === "junho" || mes === "setembro" || mes === "novembro") {
        resposta.innerHTML = `O mês de ${mes} tem 30 dias.`;
    } 
    // Agrupando meses de 31 dias
    else if (mes === "janeiro" || mes === "março" || mes === "maio" || mes === "julho" || 
             mes === "agosto" || mes === "outubro" || mes === "dezembro") {
        resposta.innerHTML = `O mês de ${mes} tem 31 dias.`;
    } 
    
}