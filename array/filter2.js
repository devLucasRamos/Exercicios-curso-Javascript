Array.prototype.filter2 = function(callback)
{
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i],i,this))
        {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2459, fragil: true},
    {nome: 'iPad Pro', preco: 1459, fragil: true},
    {nome: 'Copo de Vidro', preco: 29, fragil: true},
    {nome: 'Copo de Plastico', preco: 59, fragil: false}
]

const caro = produto => produto.preco >= 1000
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter(fragil))