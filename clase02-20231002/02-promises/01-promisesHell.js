const suma = (a, b) => {
    return new Promise((resolve, reject) => {  // res y rej
        if (isNaN(a) || isNaN(b)) {
            let error = new Error('Solo se aceptan args numericos')
            return reject(error)
        }

        resolve(a + b)

    })
}

// 5x6

suma(5, 5)
    .then(res1 => {
        suma(res1, 5)
            .then(res2 => {
                suma(res2, 5)
                    .then(res3 => {
                        suma(res3, 5)
                            .then(res4 => {
                                suma(res4, 5)
                                    .then(resFinal => console.log('promises hell:', resFinal))
                            })
                    })
            })
    })

// 5 x 6
suma(5, 5)
    .then(res1 => {
        return res1 + 5
    })
    .then(res2 => {
        // throw new Error('error login')
        return res2 + 5
    })
    .then(res3 => {
        return res3 + 5
    })
    .then(res4 => {
        console.log('encadenamiento promesas', res4 + 5)
    })
    .catch(error => console.log(error))


const multiplica = (a, b) => {
    return new Promise((resolve, reject) => {  // res y rej
        if (isNaN(a) || isNaN(b)) {
            let error = new Error('Solo se aceptan args numericos')
            return reject(error)
        }

        resolve(a * b)

    })
}

// 2x3 + 2x2
let resAuxiliar=0
multiplica(2,3)
    .then(res1=>{
        resAuxiliar=res1
        return multiplica(2,2)
    })
    .then(res2=>{
        // return suma(res1, res2)
        return suma(resAuxiliar, res2)
    })
    .then(resFinal=>console.log(resFinal))





