import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import {Server} from 'socket.io'

import { router as heroesRouter, inicializa } from './routes/heroes.router.js';

const PORT=3000;

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public'))); // configuro mi folder de recursos estáticos
app.use('/api/heroes', heroesRouter)

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

inicializa(io)

setInterval(() => {
    let temperatura=Math.floor(Math.random()*(8)+27)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)

    io.emit("lecturaTemperatura", {emisor:"Server WS", temperatura })   // emite un "mensaje" a todos los que están conectados
}, 1000);

