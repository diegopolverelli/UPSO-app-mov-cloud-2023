import express from 'express';
import mongoose from 'mongoose'
const PORT=3000;

const app=express();

const modeloHeroes=mongoose.model("heroes",new mongoose.Schema({
    nombre:String, alias:String
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/api/heroes',async(req,res)=>{

    let heroes=await modeloHeroes.find()
    console.log(`Se listaron los heroes...!!!`,new Date().toUTCString())

    res.setHeader('Content-Type','application/json');
    res.status(200).json({heroes});
})

app.delete('/api/heroes/:nombre',async(req,res)=>{

    let nombre=req.params.nombre

    let heroes=await modeloHeroes.deleteOne({nombre})
    console.log(`Se borró el heroe ${nombre}...!!!`,new Date().toUTCString())

    res.setHeader('Content-Type','application/json');
    res.status(200).json({heroes});
})


app.post('/api/heroes',async(req,res)=>{

    let {nombre, alias}=req.body
    let existe=await modeloHeroes.findOne({nombre})
    if(existe){
        console.log(`Lanzara un error por heroe existente: ${nombre}`,new Date().toUTCString())
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El heroe ${nombre} ya existe en BD`})
    }

    let nuevoHeroe=await modeloHeroes.create({nombre, alias})
    console.log(`Se creo un nuevo heroe: ${nombre}`,new Date().toUTCString())

    res.setHeader('Content-Type','application/json');
    res.status(200).json({nuevoHeroe});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    await mongoose.connect('mongodb://localhost:27017/pruebas_mongo')
    console.log('DB Online')
} catch (error) {
    console.log(error.message)
}