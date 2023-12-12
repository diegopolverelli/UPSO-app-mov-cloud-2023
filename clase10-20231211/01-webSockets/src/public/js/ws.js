// console.log('hola')

const socket=io() // cargo el cliente websocket que brinda socket.io

let divTemperatura=document.getElementById("temperatura")
let ulHeroes=document.getElementById("heroes")

socket.on("lecturaTemperatura", datos=>{
    // console.log(datos.temperatura)
    divTemperatura.innerHTML=datos.temperatura
})

// socket.emit("")

socket.on("NuevoHeroe", heroe=>{
    console.log(heroe)
    let li=document.createElement('li')
    li.innerHTML=heroe.nombre
    ulHeroes.append(li)
})