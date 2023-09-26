console.log('hola')

let usuarios=['Diego','Jimena', 'Carlos']
// let ul=document.createElement('ul')
let ulHtml=''

usuarios.forEach(usuario=>{
    ulHtml+=`<li>${usuario}</li>\n`
})

console.log(ulHtml)
