Number.prototype.entre = function (inicio,fim){
    return this >= inicio && this<= fim
}

const imprimirResultado = function (nota){
    if(nota.entre(9,10)){
        console.log("Quadro de Honra")
    }
    else if(nota.entre(7,8.99)){
        console.log("Aprovado")
    }
    else if(nota.entre(4,6.99)){
        console.log("Recuperacao")
    }else{
    console.log("Reprovado")
    }
}

imprimirResultado(3)
imprimirResultado(5)
imprimirResultado(8)
imprimirResultado(9)