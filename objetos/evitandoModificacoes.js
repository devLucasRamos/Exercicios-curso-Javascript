const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 99,
    tag: 'promocao'
})
console.log('Extensivel: ',Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto)

const pessoa = {nome: 'Juliana',idade: 35}
Object.seal(pessoa)
console.log('selado: ',Object.isSealed(pessoa))
delete pessoa.nome
pessoa.sobrenome = 'Silva'
pessoa.idade = 29
console.log(pessoa)