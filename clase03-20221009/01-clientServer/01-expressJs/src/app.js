const express=require('express')

const PORT=3000

const app=express()

// middlewares:
app.use(express.json()) // parsear datos que llegan x body
app.use(express.urlencoded({extended:true})) // parsear datos que llegan x body
app.use(express.static('./src/public')) // middleware para indicar una carpeta para archivos estáticos (imagenes, css, html, etc)

// definición rutas:
app.get('/',(req, res)=>{

    res.status(200).send('Hola, server desarrollado con ExpressJs')
})

app.get('/datos',(req, res)=>{
    console.log(req.query)
    let mensaje='DATOS'
    if(req.query.nombre){
        mensaje+=`: ${req.query.nombre}`
    }

    res.status(200).send(mensaje)
})

app.post('/datos',(req, res)=>{
    console.log(req.body)

    res.setHeader('Content-Type','application/json')
    res.status(200).json({
        resultado:'ok',
        nombre:req.body.nombre,
        email:req.body.email
    })
})

app.get('/contacto',(req, res)=>{

    res.status(200).send('Contact Page')
})

app.get('*',(req, res)=>{

    res.status(404).send('error, page not found')
})


const server=app.listen(PORT, ()=>{
    console.log(`Server on line en puerto ${PORT}`)
})