const alunos = [
    {nome: 'João', nota: 7.3 ,bolsista: false },
    {nome: 'Maria', nota: 8.3 ,bolsista: true },
    {nome: 'Pedro', nota: 6.3 ,bolsista: false },
    {nome: 'Ana', nota: 5.3 ,bolsista: true }
]

//desafio 1: todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//desafio 2: algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
