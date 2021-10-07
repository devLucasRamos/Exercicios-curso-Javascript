function Carro(velocidadeMaxima = 200, acelerado = 5 ){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + acelerado <= velocidadeMaxima){
            velocidadeAtual += acelerado
        }
        else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getvelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()

console.log(uno.getvelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getvelocidadeAtual())