//Crie uma função que dado dois valores 
//(passados como parâmetros) mostre no console a soma,
//subtração,multiplicação e divisão desses valores.

function CalculaValores(n1,n2){
    let soma = n1 + n2
    let subtracão = n1 - n2
    let divisao = n1 / n2
    let multiplicação = n1 * n2
    return console.log(`
    soma:${soma}
    subtração:${subtracão}    
    divisão:${divisao}
    multiplicação${multiplicação}`)
}

CalculaValores(4,50)