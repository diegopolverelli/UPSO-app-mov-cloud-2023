
let numero=100

function listado(){
    let numero2=90
    console.log(numero, numero2)
    return numero2
}

numero=listado()
console.log(numero)

function listado1(valor){
    valor+=10
    let numero2=90
    console.log(numero, numero2)
    return valor
}

numero=100
numero=listado1(numero)
console.log('impre:',numero)



// console.log(numero2)

let i=1
while(i<=3){
    let nombre='Jime'
    console.log('hola ',i, nombre)
    i++
}

// console.log(nombre)
