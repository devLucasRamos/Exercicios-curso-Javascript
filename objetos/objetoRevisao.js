// chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo:'A4',
    nome: 'Raul',
    endereco: {
        logradouro: 'rua ABC',
        numero: 123
    }
}

condutores: [{
    nome: 'Junior',
    idade: 19
},{nome: 'Senior',
idade: 29}],{
        calcularValorSeguro: {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.condutores.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)