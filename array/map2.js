const carrinho = [
    '{"nome": "Borracha","preco": 3.45}',
    '{"nome": "Caderno","preco": 3.45}',
    '{"nome": "Kit de Lapis","preco": 30.45}',
    '{"nome": "Caneta","preco": 7.45}',
]

//retornar array com apenas os preços

resultado = carrinho.map(function(e){
carrinhoJSON = JSON.parse(e)
console.log(carrinhoJSON.preco)
})

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado1 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado1)