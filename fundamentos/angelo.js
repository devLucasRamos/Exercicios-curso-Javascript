let pessoas = "Ângelo Velasco Malho,Edna Gago Rabelo,Isis Vigário Madureira,Lucía Galindo Girão"

listaDePessoas = pessoas.split(",")

nomesDePessoas= listaDePessoas[0].split(" ")
nomesDePessoas+=","+listaDePessoas[1].split(" ")
nomesDePessoas+= ","+listaDePessoas[2].split(" ")

listaDeNomes = nomesDePessoas.split(",")

console.log(`"todas pessoas: "
${pessoas}
`)
console.log(`"lista de pessoas: "
${nomesDePessoas}
`)
console.log(`"lista de nomes: "
${listaDeNomes}
`)

index = 1

console.log(listaDeNomes[index].substring(0,6))

console.log(`
>${listaDeNomes[index].charAt(0)}
>${listaDeNomes[index].charAt(1)}
>${listaDeNomes[index].charAt(2)}
>${listaDeNomes[index].charAt(3)}
>${listaDeNomes[index].charAt(4)}
>${listaDeNomes[index].charAt(5)}
`)


 angeloVerdadeiro = !!listaDeNomes[index]
 angeloFalso = !listaDeNomes[index]
 angeloVF = angeloFalso+angeloVerdadeiro
 angeloVF = !!angeloVF

 console.log(angeloVF)