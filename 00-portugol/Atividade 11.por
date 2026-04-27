programa
{
	funcao inicio()
	{
		real precoItem, saldoUsuario

		escreva("Digite o preço do item: R$ ")
		leia(precoItem)
		
		escreva("Digite o seu saldo atual: R$ ")
		leia(saldoUsuario)
		
		se (saldoUsuario >= precoItem)
		{
			escreva("Compra realizada com sucesso!\n")
			escreva("Saldo restante: R$ ", (saldoUsuario - precoItem))
		}
		senao
		{
			escreva("Saldo insuficiente para realizar a compra.\n")
			escreva("Faltam: R$ ", (precoItem - saldoUsuario))
		}
	}
}
