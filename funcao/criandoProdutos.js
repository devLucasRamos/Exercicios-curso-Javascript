// function criarProduto(produto,valor) {
//     function Produto(){
//         this.nome = produto,
//         this.preco = valor,
//         this.desconto = valor*0.20
//     }
//     return new Produto()
// }

// console.log(criarProduto('Moto',1500.50))

function criarProduto(nome, preco){
return {nome, preco,desconto: preco*0.2}
}

console.log(criarProduto('Moto',1500))
console.log(criarProduto('Carro',2500))
console.log(criarProduto('Casa',17000))