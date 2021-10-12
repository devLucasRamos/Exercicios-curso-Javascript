//Faça um algoritmo que calcule o fatorial de um número.

function sequenciaFatorial(numero){
    let sequencia = numero
    for(i = 1; i < numero;i++){        
        sequencia *= i
        }
    return console.log(`${numero}! o resultado da sequencia fatorial é: ${sequencia}`)
}

sequenciaFatorial(3)
sequenciaFatorial(4)
sequenciaFatorial(5)
sequenciaFatorial(6)
sequenciaFatorial(7)
sequenciaFatorial(8)
sequenciaFatorial(9)
sequenciaFatorial(10)