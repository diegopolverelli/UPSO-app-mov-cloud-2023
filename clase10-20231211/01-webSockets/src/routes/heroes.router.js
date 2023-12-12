import { Router } from 'express';
export const router=Router()
let heroes=[]

let io
export const inicializa=(serverSocket)=>{
    io=serverSocket
}

router.get('/',(req,res)=>{

    

    res.setHeader('Content-Type','application/json')
    res.status(200).json({
        heroes
    })
})

router.post('/',(req,res)=>{

    let nuevoHeroe=req.body

    io.emit("NuevoHeroe", nuevoHeroe)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nuevoHeroe});
})

