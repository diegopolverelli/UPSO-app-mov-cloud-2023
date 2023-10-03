const f2=(a, b, callback)=>{
    if(isNaN(a) || isNaN(b)){
        let error = new Error('Solo se aceptan args numericos')
        return callback(error)
    }
    return callback(null, a,b)
}

// (2x4 + 3X2) /10 +100 = 101,4

let resultado=f2(100, null, (e, a, b)=>{
    if(e){
        return console.log(e)
    }
    return f2(10, null, (e, a, b)=>{
        return f2(3,2,(e,a,b)=>{
            return f2(2,4,(e,a,b)=>{
                return a*b
            }) + a*b
        }) / a
    }) + a
})

console.log(resultado)
