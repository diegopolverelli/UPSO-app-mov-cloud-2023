const numeros=[1,2,3,4]
const letras=['a', 'b', 'c']

const suma=(a, b)=>a+b

class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre
        this.apellido=apellido

    }

    mostrarNombre(){
        return this.nombre
    }
}

module.exports={numeros, letras, suma, Persona}