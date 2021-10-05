const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 //não fazer

const prod2 = {
    nome:'Camisa Polo',
    preco: 79.90,
    prodprod: { nome: 'testinho',
    preco: 123}
}
// console.log(`
// ${prod1.nome}
// ${prod1.preco}

// ${prod2.nome}
// ${prod2.preco}`)

console.log(`
${prod2.prodprod.nome}
${prod2.prodprod.preco}`)

let dado = "Lucas;Adriano;Souza;Ramos"
let lista = dado.split(';')
let pessoa = { nome: lista[0],
    sobrenome: lista[1],
    nomeMeio: lista[2],
    nomeFinal: lista[3]
}
console.log(pessoa)