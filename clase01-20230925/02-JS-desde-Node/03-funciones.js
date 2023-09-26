
function suma(a,b){
    // codigo... 
    return a+b
}

console.log(suma(10, 4))

console.log(suma('juan', 'pedro'))

// suma='Martin'

// console.log(suma(4,5))

const suma1=function(a,b){
    return a+b
}

// suma1='manuel'

console.log(suma1(5,6))


// callbacks:
const opera=function(a, b, operacion){
    console.log(operacion)
    return operacion(a, b)
}

console.log(opera(10, 20, function(op1, op2){
    return op1*op2
}))

function multi(op1,op2){
    return op1*op2
}

console.log(multi(9,2))

console.log(opera(5, 6, multi)) // atencion, va sin los parenteris (invocacion)
                            // hay que enviar la funcion; si uno envia multi() envia el resultado
                            // de la ejecucion de multi(), que como no recibe argumentos, da como 
                            // resultado NaN (not a number)


const sumaArrow=(a,b)=>{
    return a+b
}

console.log(sumaArrow(3,2))

const sumaArrow1=(a,b)=>a+b
console.log(sumaArrow1(5,7))

const cuadrado=a=>a*a
console.log(cuadrado(9))

console.log(opera(3,10,a=>a*a))
console.log(opera(3,10,(a,b)=>a*b))



