const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovados)
aprovados.forEach(exibirAprovados)