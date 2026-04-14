programa
{
    funcao inicio()
    {
        inteiro idade
        escreva("Digite sua idade: ")
        leia(idade)
        se (idade < 16)
        {
            escreva("Você não pode votar.\n")
        }
        senao se (idade <= 17)
        {
            escreva("Seu voto é facultativo.\n")
        }
        senao se (idade <= 65)
        {
            escreva("Seu voto é obrigatório.\n")
        }
        senao
        {
            escreva("Seu voto é facultativo.\n")
        }
    }
}