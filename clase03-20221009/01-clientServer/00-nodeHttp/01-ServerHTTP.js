const http=require('http')
const url=require('url')

const PORT=3000

const server=http.createServer((req, res)=>{

    // console.log(req)
    console.log(req.url)

    const urlParsed=url.parse(req.url, true)
    console.log(urlParsed)

    switch (urlParsed.pathname) {
        case '/datos':

            let mensaje='Datos'
            if(urlParsed.query.nombre){
                mensaje+=`: ${urlParsed.query.nombre}`
            }

            res.writeHead(200, {
                'Content-Type':'text/html; charset=UTF-8'
            })
            res.end(mensaje)
                    
            break;

        case '/':
            res.writeHead(200, {
                'Content-Type':'text/html; charset=UTF-8'
            })
            res.end("Hola...!!!, soy un server desarrollado con el módulo HTTP de NodeJS")
                    
            break;

        case '/contacto':
            res.writeHead(200, {
                'Content-Type':'text/html; charset=UTF-8'
            })
            res.end("Contact Page...")
                    
            break;
    
        default:
            res.writeHead(404, {
                'Content-Type':'text/html; charset=UTF-8'
            })
            res.end("error 404 -page not found")
            break;
    }


})

server.listen(PORT, ()=>{
    console.log(`Server corriendo en puerto ${PORT}`)
})