const escola = 
[
{
nome: 'Turma M1',
 alunos:
[
    {nome: 'Gustavo', nota: 8.1},      
    {nome: 'Fernando', nota: 7.1},      
    {nome: 'Maria', nota: 5.1},     
    {nome: 'Leticia', nota: 3.1}
]
},
{
    nome: 'Turma T1',
     alunos:
    [
        {nome: 'Gustavinho', nota: 9.1},      
        {nome: 'Fernandinho', nota: 6.1},      
        {nome: 'Mariazinha', nota: 8.1},     
        {nome: 'Leticiao', nota: 7.1}
    ]
},
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)

console.log(notas1)

console.log([].concat([ 8.1, 7.1, 5.1, 3.1 ], [ 9.1, 6.1, 8.1, 7.1 ]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)