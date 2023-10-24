const http=require('http')

const PORT=3000

const server=http.createServer((req, res)=>{

    res.writeHead(200, {
        'Content-Type':'text/html; charset=UTF-8'
    })
    res.end("Hola...!!!, soy un server desarrollado con el módulo HTTP de NodeJS")
})

server.listen(PORT, ()=>{
    console.log(`Server corriendo en puerto ${PORT}`)
})