const alunos = [
    {nome: 'Joao', nota: 7.9},
    {nome: 'Maria', nota: 9.9}
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declaracao
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = aluno2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)