const pai = {nome: 'Pedro', corCabelo: 'preto'}
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1)
const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2)
filha2.nome = 'Carla'
console.log(filha2)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log('Por heranca')
}