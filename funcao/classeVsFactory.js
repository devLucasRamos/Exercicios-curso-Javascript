class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(this.nome)
    }
}
const p1 = new Pessoa('João')
p1.falar()

const criaPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criaPessoa('Fernando')
p2.falar()