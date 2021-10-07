const notas = [1,2,3,4,5,6,7,8,9]

// Sem callback

let notasBaixas = []
for(let i in notas) {
    if(notas[i] <7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callback

notasBaixas2 = notas.filter(function(notas) {
    return notas < 7
})
console.log(notasBaixas2)

const notasMenorQueSete = notas => notas < 7
const notasBaixas3 = notas.filter(notasMenorQueSete)
console.log(notasBaixas3)