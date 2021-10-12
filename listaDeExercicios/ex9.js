//Construa uma função para um sistema de notas de uma instituição
//que possui a seguinte política de classificação: Todo aluno recebe
//uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
//possuem a seguinte regra de arredondamento: Se a diferença entre a
//nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para
//esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
//arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo,
//a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser
//abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação
//do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá
//40 e o aluno será aprovado.

function geradorDeNota(min,max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random()* (max-min)) + min;
}

let aluno1 = {
    nome: "Bob Brown",
    nota: geradorDeNota(),
    situacao: " "
}
let aluno2 = {
    nome: "Alexandre Green",
    nota: geradorDeNota(),
    situacao: " "
}
let aluno3 = {
    nome: "Fernanda Pink",
    nota: geradorDeNota(),
    situacao: " "
}
let aluno4 = {
    nome: "Ricardo Red",
    nota: geradorDeNota(),
    situacao: " "
}

let alunosDaClasse = [aluno1,aluno2,aluno3,aluno4]

for(i = 0; i < alunosDaClasse.length; i++) {
    if (alunosDaClasse[i].nota < 40){
        alunosDaClasse[i].situacao = "Reprovado"
    }
    else{
        alunosDaClasse[i].situacao = "Aprovado"
    }
}

console.log(alunosDaClasse)