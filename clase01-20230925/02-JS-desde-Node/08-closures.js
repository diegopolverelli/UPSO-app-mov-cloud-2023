
// let contador=0

// contador++
// contador++
// contador++

// contador=90

// console.log(contador)

let cont0001=(function(){
    let contador=0

    function incrementa(){
        contador++
    }

    function decrementa(){
        contador--
        // contador=contador-1
    }

    function verContador(){
        return contador
    }

    return {incrementa, decrementa, verContador}

})()

cont0001.incrementa()
cont0001.incrementa()
cont0001.incrementa()
cont0001.incrementa()
console.log(cont0001.verContador())
// console.log(cont0001.contador)


const creaContador=function(){
    let contador=0

    function incrementa(){
        contador++
    }

    function decrementa(){
        contador--
        // contador=contador-1
    }

    function verContador(){
        return contador
    }

    return {incrementa, decrementa, verContador}

}

let cont1=creaContador()
let cont2=creaContador()
let cont3=creaContador()

cont1.decrementa()
cont1.decrementa()
cont1.decrementa()
cont1.decrementa()
console.log(cont1.verContador())

cont3.incrementa()
console.log(cont3.verContador())


const creaPersona=function(nom, ape){
    nombre=nom
    apellido=ape

    function getNombreCompleto(){
        return `${nombre} ${apellido}`
    }

    function setNombre(nom){
        nombre=nom
    }

    return {getNombreCompleto, setNombre}
}

let persona1=creaPersona('Juan','Lopez')
console.log(persona1.getNombreCompleto())

let persona2=creaPersona('Mirna','Poulain')
console.log(persona2.getNombreCompleto())

let persona3=creaPersona()
console.log(persona3.getNombreCompleto())
