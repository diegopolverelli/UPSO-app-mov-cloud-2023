const suma = (a, b) => {
    return new Promise((resolve, reject) => {  // res y rej
        if (isNaN(a) || isNaN(b)) {
            let error = new Error('Solo se aceptan args numericos')
            return reject(error)
        }

        resolve(a + b)

    })
}


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
const entorno=async()=>{
    try {
        let res1=await multiplica(2,3)
        let res2=await multiplica(2,2)
        let resFinal=await suma(res1, res2)
        // return resFinal

        console.log(resFinal)
        
    } catch (error) {
        return error        
    }
}

entorno()

