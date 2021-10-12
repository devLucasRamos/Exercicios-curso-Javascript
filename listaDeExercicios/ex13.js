/*Crie um programa que exibe se um dia é dia útil,
fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. 
Utilize a estrutura Switch.
*/

function diaDaSemana(dia){
switch (dia) {
    case 1:
        console.log("domingo é fim de semana!")
        break
    case 2:
        console.log("segunda é dia util")
        break
    case 3:
        console.log("terça é dia util")
        break
    case 4:
        console.log("quarta é dia util")
        break
    case 5:
        console.log("quinta é dia util")
        break
    case 6:
        console.log("sexta é dia util")
        break
        
    case 7:
        console.log("sabado é fim de semana!")
        break
    default:
        console.log("dia inválido") 
}
}

diaDaSemana(1)
diaDaSemana(1000000)
diaDaSemana("wqewqrwq")
diaDaSemana()
diaDaSemana(2)
diaDaSemana(3)
diaDaSemana(4)
diaDaSemana(5)
diaDaSemana(6)
diaDaSemana(7)