function verificarSenha() {
    let resposta = document.getElementById('resultado');
    
    // Entrada
    let senha = prompt("Crie uma nova senha:");

    // Processamento
    if (senha.length >= 8) {
        resposta.innerHTML = "Senha segura!  Sua senha tem " + senha.length + " caracteres.";
    } else {
        resposta.innerHTML = "Senha muito curta!  A senha precisa de pelo menos 8 caracteres. Você digitou apenas " + senha.length + ".";
    }
}