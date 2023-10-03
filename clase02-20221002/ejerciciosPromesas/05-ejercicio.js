// Crea 4 funciones, para suma, multiplicacion, resta, y division,
// todas con promesas (que retornen promesas). Cada función debe 
// aceptar 2 argumentos. 
// Realiza las validaciones pertinentes: validar argumentos numéricos, 
// y divisor diferente a 0 para la división.
// Crear una función adicional llamada calculadora, que admita
// dos argumentos, que sea asincrona, y que resuelva las 4 operaciones
// sobre los argumentos recibidos. 





















// Rta.:
// const suma=(a,b)=>{
//     return new Promise((res,rej)=>{
//         if(typeof a!=='number' || typeof b!=='number'){
//             return rej('Error: solo se aceptan argumentos numéricos')
//         }

//         return res(a+b)

//     })
// }

// const resta=(a,b)=>{
//     return new Promise((res,rej)=>{
//         if(typeof a!=='number' || typeof b!=='number'){
//             return rej('Error: solo se aceptan argumentos numéricos')
//         }

//         return res(a-b)

//     })
// }

// const multiplicacion=(a,b)=>{
//     return new Promise((res,rej)=>{
//         if(typeof a!=='number' || typeof b!=='number'){
//             return rej('Error: solo se aceptan argumentos numéricos')
//         }

//         return res(a*b)

//     })
// }

// const division=(a,b)=>{
//     return new Promise((res,rej)=>{
//         if(typeof a!=='number' || typeof b!=='number'){
//             return rej('Error: solo se aceptan argumentos numéricos')
//         }

//         if(b===0){
//             return rej('Error: el divisor no puede ser cero')
//         }

//         return res(a/b)

//     })
// }


// const calculadora=async(a,b)=>{
//     try {
//         console.log('Suma:', await suma(a,b))
//         console.log('Resta:', await resta(a,b))
//         console.log('Multiplicacion:', await multiplicacion(a,b))
//         console.log('Division:', await division(a,b))
//     } catch (error) {
//         console.log(error)        
//     }

// }

// calculadora(7,3)


