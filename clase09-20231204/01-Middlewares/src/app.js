import express from 'express'
import { router as usuariosRouter} from './routes/usuariosRouter.js'

const PORT=3000
const app=express()

const mid01=(req, res, next)=>{
    console.log(`pasó por el mid01...!!!`)
    next()
}

function mid02(req, res, next){
    console.log(`pasó por el mid02...!!!`)
    if(req.query.nombre){
        req.query.nombre=req.query.nombre.toUpperCase()
    }
    req.codigo=Math.floor(Math.random()*(100)+0)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    next()
}

const authMidd=function(req, res, next){
    let {nombre, password}=req.query
    if(!nombre || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre y password x query param...!!!`})
    }

    console.log(nombre)
    let usuarios=['diego', 'laura', 'admin']
    if(!usuarios.includes(nombre.toLowerCase())){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Usuario invalido...!!!`})
    }

    if(password!=='UPSO2023'){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`credenciales invalidas`})
    }


    next()
}


app.use(mid01, mid02, (req, res, next)=>{
    console.log(`mid on line...!!! `)
    next()
})
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('./src/public'))


app.use('/api/usuarios' , authMidd, usuariosRouter)

// app.get('/', (req, res)=>{

//     res.status(200).send('Hola...!!! Server Express...!!!')
// })


app.get('/error', (req, res, next)=>{
    console.log(`solo ejecuta para endpoint /error...!!!`)
    next()
},(req, res)=>{

    res.status(400).send('Error...')
})

app.get('/prueba',(req,res)=>{
    
    console.logg('hola...!!!')

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        resultado:'ok'
    });
});


app.use((error, req, res, next)=>{
    if(error){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`, detalle:error.message})
    }

    next()
})


const server=app.listen(PORT, ()=>{
    console.log(`Server online en puerto ${PORT}`)
})