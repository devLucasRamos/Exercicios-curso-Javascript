/* Crie uma estrutura condicional switch que receba uma string com o nome
 de uma fruta e que possua três casos: Caso maçã, retorne no console:
  “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais
 o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
 */

function compraFruta(fruta){
    switch(fruta){
            case fruta = 'maca':
            console.log("Não vendemos esta fruta aqui")
            break

            case fruta = 'kiwi':
            console.log("Estamos com escassez de kiwis")
            break

            case fruta = 'melancia':
            console.log("Aqui está, são 3 reais o quilo")
            break

            default:
            console.log("Desculpe, não temos isso aqui")
    }
}
compraFruta('maca')
compraFruta('kiwi')
compraFruta('melancia')
compraFruta('fruta do conde importada do canadá descascada e lavada com agua mineral')