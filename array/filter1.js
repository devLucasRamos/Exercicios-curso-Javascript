const produtos = [
    {nome: 'Notebook', preco: 2459, fragil: true},
    {nome: 'iPad Pro', preco: 1459, fragil: true},
    {nome: 'Copo de Vidro', preco: 29, fragil: true},
    {nome: 'Copo de Plastico', preco: 59, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 1000 && p.fragil
}))

const caro = produto => produto.preco >= 1000
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))