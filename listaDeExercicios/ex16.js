/*Utilizando a estrutura do Switch faça um programa que simule uma
 calculadora básicaO programa recebe como parâmetros dois valores numéricos
 e uma string referente à operação e a realize com os valores*/

 function calculadoraSwitch(numero1,numero2, operacao){
     switch(operacao){
        case operacao = 'soma':
        console.log(numero1+numero2)
        break
        case operacao = 'subtracao':
        console.log(numero1-numero2)
        break
        case operacao = 'multiplicacao':
        console.log(numero1*numero2)
        break
        case operacao = 'divisao':
        console.log(numero1/numero2)
        break
        case operacao = 'modulo':
        console.log(numero1%numero2)
        break
        default:
        console.log("Algo de errado não está certo")
     }
 }

 calculadoraSwitch(101,10,'soma')
 calculadoraSwitch(101,10,'subtracao')
 calculadoraSwitch(101,10,'multiplicacao')
 calculadoraSwitch(101,10,'divisao')
 calculadoraSwitch(101,10,'modulo')
 calculadoraSwitch(101,10,'potencia')