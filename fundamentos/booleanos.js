let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log("numeros verdadeiros:")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("numeros verdadeiros:")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))


console.log("finalizando:")
console.log(!!(''|| null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')
let nomes = ''
console.log(nomes || 'Desconhecido')
