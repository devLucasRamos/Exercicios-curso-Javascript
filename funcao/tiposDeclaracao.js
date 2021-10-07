console.log(soma(5,6))
// console.log(sub(5,6)) //erro
// console.log(mult(5,6))//erro

//function declaration
function soma(x,y){
    return x + y
}
//function expression
const sub = function (x,y){
    return x - y
}
//named function expression
const mult = function mult (x,y){
    return x * y
}
console.log(sub(5,6)) 
console.log(mult(5,6))