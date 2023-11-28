const Persona=require('./modulo').Persona
const numeros=require('./modulo').numeros
const {numeros:misNumeros}=require('./modulo')

const {letras}=require('./modulo')

const Heroes=require('./heroes')


const persona01=new Persona("Juan", "Lopez")
console.log(persona01.mostrarNombre())

console.log(numeros)
console.log(misNumeros)

console.log(letras)

const heroe01=new Heroes("Superman", "DC")
console.log(heroe01.mostrarNombre())

