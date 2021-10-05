const imprimirResultado = function (nota){
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log("Quadro de Honra")
            break
        case 8: case 7:
            console.log("Aprovado")
            break
        case 6: case 5: case 4: case 3: case 2: case 1:
            console.log("Recuperacao")
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log("Reprovado")
            break
    }
}

imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(5)
imprimirResultado(4)
imprimirResultado(3)