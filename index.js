import express, { urlencoded } from "express";
import formularioRoute from './Routes/FormularioRoutes.js'
const app = express();
const port = 5000

//middleware
app.use(express.static('public'))
app.use(urlencoded({extended:true}))

app.use('/',formularioRoute)
app.listen(port, ()=>console.log(`Servidor ejecutado http://localhost:${5000}`))

