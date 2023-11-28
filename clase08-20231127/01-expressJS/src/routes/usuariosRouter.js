import {Router} from 'express'

export const router=Router()

let usuarios=[{
    id:1, nombre:'Carolina', email:'carolina@test.com', status:true
},
{
    id:2, nombre:'Cristian', email:'cristian@test.com', status:true
},
{
    id:3, nombre:'Laura', email:'laura@test.com', status:true
},
{
    id:4, nombre:'Rodrigo', email:'rodrigo@test.com', status:true
},

]

router.get('/',(req, res)=>{

    // let usuarios=usuarios
    // let {limit, email}=req.query
    let limit=req.query.limit
    // let email=req.query.email

    let resultado=usuarios
    if(limit){
        resultado=resultado.slice(0, limit)
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:resultado, status:'OK'});
})

router.get('/:id',(req, res)=>{

    let id=req.params.id
    id=parseInt(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El id ${req.params.id} es invalido. Ingrese un id numérico...!!!`})
    }

    let usuario=usuarios.find(u=>u.id===id)
    if(!usuario){
        res.setHeader('Content-Type','application/json');
        return res.status(404).json({error:`No se encuentra el usuario con id ${id}`})
    }
    
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:usuario, status:'OK'});
})

router.post('/',(req,res)=>{

    let {nombre, email}=req.body
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Faltan datos: complete nombre y email`})
    }

    let existe=usuarios.find(u=>u.email===email)
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El usuario con email ${email} ya existe`})
    }

    let id=1
    if(usuarios.length>0){
        id=usuarios[usuarios.length-1].id + 1
    }

    let nuevoUsuario={id, nombre, email}

    usuarios.push(nuevoUsuario)

    
    res.setHeader('Content-Type','application/json');
    res.status(201).json({
        nuevoUsuario
    });
});

router.put('/:id',(req,res)=>{
    let id=req.params.id
    id=parseInt(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El id ${req.params.id} es invalido. Ingrese un id numérico...!!!`})
    }

    let indiceUsuario=usuarios.findIndex(u=>u.id===id)
    if(indiceUsuario===-1){
        res.setHeader('Content-Type','application/json');
        return res.status(404).json({error:`No se encuentra el usuario con id ${id}`})
    }

    let {nombre, email}=req.body
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Faltan datos: complete nombre y email`})
    }

    usuarios[indiceUsuario]={id, nombre, email}
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        usuarioModificado:usuarios[indiceUsuario]
    });
});


router.delete('/:id',(req,res)=>{
    let id=req.params.id
    id=parseInt(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El id ${req.params.id} es invalido. Ingrese un id numérico...!!!`})
    }

    let indiceUsuario=usuarios.findIndex(u=>u.id===id)
    if(indiceUsuario===-1){
        res.setHeader('Content-Type','application/json');
        return res.status(404).json({error:`No se encuentra el usuario con id ${id}`})
    }

    let usuarioEliminado=usuarios[indiceUsuario]
    usuarios.splice(indiceUsuario, 1)
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        usuarioEliminado
    });
});

