const notas = [1.9,8.2,5.3,7.4,5.6,6.1,7.9,8.4]

for(i in notas){
    console.log(i,')', notas[i])
}

const pessoa = {
    nome: 'Jessica',
    sobrenome: 'Silva',
    idade:24,
    peso:64
}
for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}