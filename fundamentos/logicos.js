function compras(trabalho1,trabalho2) {
    const compraSorvete = trabalho1 || trabalho2
    const compraTv50 = trabalho1 && trabalho2
    //const compraTv32 = !!(trabalho1 ^ trabalho2 ) //bitwise xor
    const compraTv32 = trabalho1 != trabalho2
    const manterSaudavel = !compraSorvete

    return {compraSorvete,compraTv32,compraTv50,manterSaudavel}
}

console.log('1) ',compras(true,true))
console.log('2) ',compras(true,false))
console.log('3) ',compras(false,true))
console.log('4) ',compras(false,false))