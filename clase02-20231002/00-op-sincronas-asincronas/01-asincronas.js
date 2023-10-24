const fs=require('fs')
// import fs from 'fs'

console.log('inicio')

setTimeout(()=>{
    console.log('2 seg.')
},2000)

setTimeout(()=>{
    console.log('1 seg.')
},1000)

setTimeout(()=>{
    console.log('0 seg.')
},0)

let contador=1
let intervalo01=setInterval(()=>{
    console.log(contador)
    contador++
    if(contador>4){
        clearInterval(intervalo01)
    }
},1000)

fs.writeFile('./prueba.txt','Datos:\n1,2,3,4,5',(error)=>{
    if(error){
        return console.log(error.message)
    }
    console.log('Archivo guardado...!!!')
})
console.log('fin')

// fetch()

