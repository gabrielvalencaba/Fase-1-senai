function deslocamento_eventos(){
    let resposta = document.getElementById('resultado')
    let esta_gripado, tempo_distancia
    
    // ENTRADA
    esta_gripado = prompt("Sarumano está doente?\nSim ou Não?")
    tempo_distancia = Number(prompt("Quantos tempo leva até o local?"))

    //SAÌDA
    if (esta_gripado.toLowerCase() == "sim" && tempo_distancia < 45) {
        resposta.innerHTML = "impossibilitado de ir ao evento. Não pode ir ao evento"
    } else {
        resposta.innerHTML = "Pode ir ao show."
    }
}
