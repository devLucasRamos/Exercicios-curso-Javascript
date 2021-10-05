const pessoa = {
    nome: 'Fernanda',
    idade: 17,
    endereco:{
        logradouro: 'Rua dos motoboys',
        numero: 1024
    }
}

const {nome, idade} = pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log(nome,idade)

const { sobrenome, bemHumorada} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco:{logradouro,numero,cep}} = pessoa
console.log(logradouro, numero, cep)