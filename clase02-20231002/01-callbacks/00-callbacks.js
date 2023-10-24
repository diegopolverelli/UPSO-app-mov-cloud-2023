
const f1=(a, b, callback)=>{
    return callback(a,b)
}

console.log(f1(3,3, (a,b)=>a*b))

// documentado primer arg es error
const f2=(a, b, callback)=>{
    if(isNaN(a) || isNaN(b)){
        let error = new Error('Solo se aceptan args numericos')
        return callback(error)
    }
    return callback(null, a,b)
}

console.log(f2(2,3,(error,a,b)=>a+b))
// console.log(f2('juan',3,(a,b)=>a+b))
console.log('el resultado de 3x(2+2)=',3*f2(2,2,(error,a,b)=>a+b))
console.log('el resultado de 3x(2+2)=',3*f2('pepe',2,(error, a,b)=>{
    if(error){
        console.log(error.message)
        process.exit()
    }else{
        return a+b
    }
}))



