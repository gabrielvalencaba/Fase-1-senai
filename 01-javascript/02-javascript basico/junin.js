
// infos
let salario, dias, salarioDiario
// entradas
salario = Number(promt("Salário: "))
dias = Number(promt("Dias trabalhados: "))
// proessamentos
salarioDiario = salario / dias
// saídas
alert("Salário diário: R$" + salarioDiario.toFixed(2))