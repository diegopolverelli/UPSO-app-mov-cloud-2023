const { text } = require("express")

let nombre='Jimena'
let texto='hola '+nombre+', ¿como estas?\n\n\ntodo bien???'


console.log(texto)

texto=`hola ${nombre}... el resultado de sumar 2 + 2 es ${2+2}...



¿ok?


eso espero...`

console.log(texto)
