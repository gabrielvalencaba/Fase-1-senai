const salario = 5000;

const contas = {
    moradia: 1500,
    agua: 100,
    luz: 200,
    internet: 120,
    gasolina: 300,
    streamings: 60,
    telefone: 40,
    outros: 150
};

const totalContas = Object.values(contas).reduce((acc, curr) => acc + curr, 0);

const sobra = salario - totalContas;
console.log("-----------------------------------------");
console.log(`Olá, Mano Juca! Fiz as contas para você. `);
console.log(`Seu saldo final este mês é de: R$ ${sobra.toFixed(2)}`);

if (sobra > 0) {
    console.log("Boa! Sobrou um dinheirinho para a poupança! ");
} else if (sobra === 0) {
    console.log("Ufa! Ficou no zero a zero, mas as contas estão pagas. 👍");
} else {
    console.log("Puxa, Mano Juca... este mês ficou no vermelho. Cuidado! ⚠️");
}
console.log("-----------------------------------------");