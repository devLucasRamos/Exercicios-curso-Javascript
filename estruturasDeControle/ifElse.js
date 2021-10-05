const imprimirResultado = function (nota){
    if(nota>=7){
        console.log('Aprovado!')
    }
    else{
        console.log('Reprovado')
    }
}

imprimirResultado(6)
imprimirResultado(8)
imprimirResultado('string') //deveria ocorrer um erro