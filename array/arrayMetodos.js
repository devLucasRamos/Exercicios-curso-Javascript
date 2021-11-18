const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
separador = '------------------------------------------'
console.log(pilotos)
pilotos.pop()
console.log(pilotos)

console.log(separador)
console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)

console.log(separador)
console.log(pilotos)
pilotos.shift()
console.log(pilotos)

console.log(separador)
console.log(pilotos)
pilotos.unshift('Hamilton')
console.log(pilotos)

console.log(separador)
console.log(pilotos)
pilotos.splice(2,0,'Botas','Massa')
console.log(pilotos)

console.log(separador)
pilotos.splice(3,1)
console.log(pilotos)

console.log(separador)
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

console.log(separador)
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)