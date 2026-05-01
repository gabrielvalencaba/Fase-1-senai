function verificarRecrutamento() {
    // INFOS
    let saberNadar, idade, temRecomendacao;
    // ENTRADAS
    saberNadar = confirm("Você sabe nadar?");
    idade = Number(prompt("Qual é a sua idade?"));
    temRecomendacao = confirm("Você tem carta de recomendação de outro pirata");
    // SAIDAS
    if (saberNadar && idade > 16) { 
        alert("Aprovado para o navio");
        console.log(" Marujo padrão aprovado.");
    } else if (temRecomendacao && idade >= 14) {
        alert("Aprovado sob recomendação. Monitorar nas primeiras viagens.");
        console.log("Marujo por recomendação");
    } else {
        alert("Reprovado. Volte quando estiver mais preparado para o mar.");
        console.log("Candidato não atende os requisitos.");
    }
}