const funcs = []
for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[8]()
funcs[4]()