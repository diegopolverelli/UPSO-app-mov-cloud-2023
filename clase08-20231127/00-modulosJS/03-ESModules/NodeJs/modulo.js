export const numeros=[1,2,3,4]
export const letras=['a', 'b', 'c']

const suma=(a, b)=>a+b

export default class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre
        this.apellido=apellido

    }

    mostrarNombre(){
        return this.nombre
    }
}

export {suma}