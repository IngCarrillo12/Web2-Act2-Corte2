import express, { urlencoded } from "express";
import Routes from './Routes/Routes.js'
const app = express();
const port = 5000

//middleware
app.use(express.static('public'))
app.use(urlencoded({extended:true}))

app.use('/',Routes)
app.listen(port, ()=>console.log(`Servidor ejecutado http://localhost:${5000}`))

