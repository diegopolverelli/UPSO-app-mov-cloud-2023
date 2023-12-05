import express from 'express';
import multer from 'multer';
import __dirname from './utils.js';
import path from 'path'

console.log(path.join(__dirname, '/uploads'))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/uploads'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // file.
        // cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, uniqueSuffix+"-"+file.originalname)

    }
})

const upload = multer({ storage: storage })

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')))

app.post('/profile', upload.single('foto'), function (req, res, next) {

    // validar por req.file.mimetype que sean de tipo imagen (por razones de seguridad...!!!)

    // req.file is the `avatar` file
    console.log(req.file)
    // req.body will hold the text fields, if there were any

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombre:req.body.nombre, imagen: req.file.path});
})

// app.get('/',(req,res)=>{
//     res.setHeader('Content-Type','text/plain');
//     res.status(200).send('OK');
// })

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});
