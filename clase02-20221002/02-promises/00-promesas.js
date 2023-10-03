
const suma = (a, b) => {
    return new Promise((resolve, reject) => {  // res y rej
        if (isNaN(a) || isNaN(b)) {
            let error = new Error('Solo se aceptan args numericos')
            return reject(error)
        }

        resolve(a + b)

    })
}

console.log(suma(4, 5))
console.log(suma(4, 5) * 4) // esto va a querer multiplicar un objeto Promise{9} x 4 y va a devolver NaN

suma(4, 5)
    .then(resultado => console.log(resultado))
    .catch(error => {
        console.log(error.message)
    })

suma(4, 'jose')
    .then(resultado => console.log(resultado))
    .catch(error => {
        console.log(error.message)
    })
    .finally(()=>{
        console.log('esto se ejecuta siempre...')
    })

// suma(4, 'jose')
//     .then(resultado => console.log(resultado))
