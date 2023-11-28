import Persona from './modulo.js'
import {suma, letras, numeros as misNumeros} from './modulo.js'
import * as modulo from './modulo.js'


const persona01=new Persona('Jimena','Moralez')
console.log(persona01.mostrarNombre())

console.log(suma(9,10))
console.log(letras)
console.log(misNumeros)

const persona02=new modulo.default("Martin","Rios")
console.log(persona02.apellido)

console.log(modulo.letras)

