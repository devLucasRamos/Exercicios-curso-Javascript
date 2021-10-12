//Elabore duas funções que recebem três parâmetros: capital inicial,
//taxa de juros e tempo de aplicação.A primeira função retornará o
//montante da aplicação financeira sob o regime de juros simples e
//a segunda retornará o valor da aplicação sob o regime de juros compostos

function jurosSimples(capital,juros,tempo){
    console.log("Juros Simples:")
    let taxa = capital * juros
    for(let i = 0; i < tempo; i++){
        console.log(`No ano ${i+1}: R$${capital} com a taxa de ${juros}% = R$ ${capital+taxa} (+R$${taxa} de juros)
        `)
        capital += taxa
    }
}
function jurosAbusivo(capital,juros,tempo){
    console.log("Juros Abusivos:")
    for(let i = 0; i < tempo; i++){
        let taxa = capital * juros
        console.log(`No ano ${i+1}: R$${capital} com a taxa de ${juros}% = R$ ${capital+taxa} (+R$${taxa} de juros)
        `)
        capital += taxa
    }
}

jurosSimples(1000,0.50,10)
console.log("------------------------------------------------------------")
jurosAbusivo(1000,0.50,10)