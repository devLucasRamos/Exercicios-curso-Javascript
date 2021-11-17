const pessoa = {nome: 'Joao'}

pessoa.nome = 'Pedro'

console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)
delete pessoa.nome
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante.nome)


