var x = 2
var y = -4
var z = 6

if (y>x){
    x = y
    z = x*2
    y = z+x
}
else{
    z = x+y
    y = y-z
    x = y/2
}
if (y>= 2){
    z = (x+2)
}
x = y/z - 0.5
z = x+1
y = y - z
console.log("Novo valor de x: ",x)
console.log("Novo valor de y: ",y)
console.log("Novo valor de z: ",z)
