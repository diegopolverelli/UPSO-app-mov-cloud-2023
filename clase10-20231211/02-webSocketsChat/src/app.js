import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import {Server} from 'socket.io'


const PORT=3000;

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public'))); // configuro mi folder de recursos estáticos

app.get('/websocket',(req,res)=>{

    res.setHeader('Content-Type','text/html');
    res.status(200).render('ws');
})

app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/html');
    res.status(200).render('home');
})

app.get('/heroes',(req,res)=>{
    
    res.setHeader('Content-Type','text/html');
    res.status(200).render('heroes');
})

const server=app.listen(PORT,()=>{  // server HTTP, habitual... el de siempre
    console.log(`Server escuchando en puerto ${PORT}`);
});


const io=new Server(server) // server de Websocket (se llama io, por convencion)

// io.emit() // a todos... todos los conectados al server

let usuarios=[]
let mensajes=[]

io.on("connection", socket=>{

    console.log(`Se ha conectado un cliente con id ${socket.id}`)

    socket.emit("hello", {emisor: "Server WS", mensaje:"Bienvenido. Identifiquese", mensajes})     // al que emitio, o realizó el evento recién

    socket.on("id", nombre=>{
        usuarios.push({
            nombre, id: socket.id
        })
    
        console.log(`Se acaba de unir ${nombre}`)
        socket.broadcast.emit("nuevoUsuario", nombre)   // a todos, menos al que emitió recién
    })

    socket.on("mensaje", datos=>{
        mensajes.push(datos)
        io.emit("nuevoMensaje", datos)
    })

    socket.on("disconnect", ()=>{
        let usuario=usuarios.find(u=>u.id===socket.id)

        //falta borrar al usuario del array usuarios...
        if(usuario){
            io.emit("ususarioDesconectado", usuario.nombre)
        }
    })

})

