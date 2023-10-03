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
        return resFinal
        
    } catch (error) {
        return error        
    }
}

entorno()
    .then(algo=>console.log(algo))
    .catch(e=>console.log(e.message))

const entorno2=async function(){
    let res=await multiplica(9,9)
    return res
}

entorno2().then(res=>console.log(res))

async function entorno3(){
    let res=await multiplica(7,9)
    return res
}

entorno3().then(res=>console.log(res))
