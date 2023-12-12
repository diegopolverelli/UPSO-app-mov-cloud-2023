// console.log('hola')
let nombre=prompt("Ingrese su nombre")
document.title=nombre

let inputMensaje=document.getElementById("mensaje")
let divMensajes=document.getElementById("mensajes")

inputMensaje.focus()
const socket=io() // cargo el cliente websocket que brinda socket.io

inputMensaje.addEventListener("keyup", (e)=>{
    // console.log(e, e.target.value)
    if(e.code==="Enter"){
        if(e.target.value.trim().length!==0){
            socket.emit("mensaje", {emisor:nombre, mensaje: e.target.value.trim()})
            e.target.value=""
            e.target.focus()
        }
    }
})

socket.on("nuevoMensaje", datos=>{
    let parrafo=document.createElement('p')
    parrafo.innerHTML=`<strong>${datos.emisor}</strong> dice <i>"${datos.mensaje}"</i>`
    parrafo.classList.add("mensaje")
    let br=document.createElement('br')

    divMensajes.append(parrafo)
    divMensajes.append(br)

    divMensajes.scrollTop=divMensajes.scrollHeight

})

socket.on("hello", datos=>{
    console.log(`${datos.emisor} dice "${datos.mensaje}"`)

    datos.mensajes.forEach(m=>{
        let parrafo=document.createElement('p')
        parrafo.innerHTML=`<strong>${m.emisor}</strong> dice <i>"${m.mensaje}"</i>`
        parrafo.classList.add("mensaje")
        let br=document.createElement('br')
        divMensajes.append(parrafo)
        divMensajes.append(br)
    })

    socket.emit("id",nombre)
})

socket.on("ususarioDesconectado", nombre=>{
    let parrafo=document.createElement('p')
    parrafo.innerHTML=`<strong>${nombre}</strong> se ha desconectado del servidor`
    parrafo.classList.add("mensaje")
    let br=document.createElement('br')

    divMensajes.append(parrafo)
    divMensajes.append(br)
})

socket.on("nuevoUsuario", nombre=>{
    // console.log(`${nombre} se ha unido al server`)
    let parrafo=document.createElement('p')
    parrafo.innerHTML=`<strong>${nombre}</strong> se ha unido al servidor`
    parrafo.classList.add("mensaje")
    let br=document.createElement('br')

    divMensajes.append(parrafo)
    divMensajes.append(br)
})