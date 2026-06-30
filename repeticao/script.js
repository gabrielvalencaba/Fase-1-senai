let idades = [18,20,12,35,14,15,38,88,99]
let precos = []

const produtos = [
  "Arroz Integral", "Feijão Carioca", "Azeite de Oliva", "Macarrão Espaguete", "Café Torrado",
  "Açúcar Refinado", "Sal Refinado", "Leite Integral", "Manteiga com Sal", "Queijo Prato",
  "Presunto Cozido", "Pão de Forma", "Biscoito Recheado", "Chocolate ao Leite", "Suco de Uva",
  "Refrigerante de Cola", "Água Mineral", "Sabonete Líquido", "Shampoo Hidratante", "Condicionador",
  "Creme Dental", "Escova de Dentes", "Desodorante Aerossol", "Papel Higiênico", "Detergente Neutro",
  "Esponja de Aço", "Sabão em Pó", "Amaciante de Roupas", "Desinfetante de Pinho", "Água Sanitária",
  "Inseticida Spray", "Saco de Lixo", "Papel Alumínio", "Filme Plástico", "Guardanapo de Papel",
  "Azeite de Dendê", "Molho de Tomate", "Atum em Lata", "Sardinha em Óleo", "Milho Verde em Conserva",
  "Ervilha em Lata", "Creme de Leite", "Leite Condensado", "Gelatina de Morango", "Farinha de Trigo",
  "Farinha de Mandioca", "Óleo de Soja", "Vinagre de Álcool", "Maionese Tradicional", "Ketchup Picante"
];


function mostrarProdutos(){
    for(let i=0; i<produtos.length; i++){
        console.log(produtos[i])
    }

}

function array00(){

    // let i = 14
    // console.log("Idade: " + idades[i]);

    // console.log(idades.length);
    // console.log("idade: " + idades[0]);
    // console.log("idade: " + idades[1]);
    // console.log("idade: " + idades[2]);
    // console.log("idade: " + idades[3]);
    // console.log("idade: " + idades[4]);
    // console.log("idade: " + idades[5]);

    // for(let i=0; i<6; i++){
    //      console.log("idade: " + idades[i]);
    // }
    for(let i=0; i<idades.length; i++){
         console.log("idade: " + idades[i]);
    }
}

function addPrecos(){
    let n = Math.ceil(Math.random() * 100)

    precos.push(n)

    // console.log(precos);

    document.getElementById('lista-precos').innerHTML = ' '
    for(let i=0; i<precos.length; i++){ 
        console.log(precos[i]);
        document.getElementById('lista-precos').innerHTML += precos[i] + ' - '


    }
}
