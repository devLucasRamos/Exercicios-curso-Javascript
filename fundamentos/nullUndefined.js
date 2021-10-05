let valor
console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toString()) Error!

const product = {}
console.log(product.preco)
console.log(product)

product.preco = 3.50
console.log(product)

product.preco = undefined
console.log(!!product.preco)
console.log(product)

product.preco = null
console.log(!!product.preco)