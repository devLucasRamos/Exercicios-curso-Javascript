//literal
const obj1 = {}
console.log(obj1)

//obj em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//construtoras
function Produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto ('Caneta',7.99,0.15)
const p2 = new Produto ('Notebooks',10.99,0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

//function factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome, salarioBase, faltas, getSalario(){
            return (salarioBase / 30 * (30 - faltas))
        }
    }
}
const f1 = criarFuncionario ('Enzo',1500,4)
const f2 = criarFuncionario ('Maria',5432,1)

console.log(f1.getSalario())
console.log(f2.getSalario())

//obj.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna Objeto...
const fromJSON = JSON.parse(`{"info": "Eu sou um JSON"}`)
console.log(fromJSON.info)