function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2,6)
imprimirSoma(2)
imprimirSoma(6,5,4,3,2,2,4,1)
imprimirSoma()

function soma(a,b=9){
    return a + b
}

console.log(soma(1,8))
console.log(soma(8))
console.log(soma())