programa {
  funcao inicio() {
    inteiro frutas
    real total

    escreva("Digite a quantidade de maças: ")
    leia(frutas)

    se (frutas < 12) {
      total = frutas * 0.30
    } senao {
      total = frutas * 0.25
    }

    escreva("O total da compra é: R$ ", total)
  }
}
    
    

