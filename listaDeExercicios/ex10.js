//Crie uma função que verifica se um número inteiro passado como
//parêmetro é divisível por 3 e retorne true ou false.

function dividePor3 (numero){
    let dividido = numero % 3
    if (dividido == 0){
        return true
    }
    else{
        return false
    }
}

console.log(dividePor3(3))
console.log(dividePor3(6))
console.log(dividePor3(9))
console.log(dividePor3(4))
console.log(dividePor3(7))
console.log(dividePor3(8))
console.log(dividePor3(11))