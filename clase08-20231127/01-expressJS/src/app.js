import express from 'express'
import { router as usuariosRouter} from './routes/usuariosRouter.js'

const PORT=3000
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/usuarios', usuariosRouter)


app.get('/', (req, res)=>{

    res.status(200).send('Hola...!!! Server Express...!!!')
})

app.get('/error', (req, res)=>{

    res.status(400).send('Error...')
})


const server=app.listen(PORT, ()=>{
    console.log(`Server online en puerto ${PORT}`)
})