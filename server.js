// CONFIGURACION
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 8000
require('dotenv').config()
const cookieParser = require('cookie-parser')

// requerir archivo de configuracion
require('./server/config/mongoose.config')

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// middleware que agregar cookies a la solicitud
app.use(cookieParser())


//CORS 
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))


// BASE DATOS
require('./server/config/mongoose.config.js')

// ENRUTAMIENTO
const RutasUsuarios = require('./server/routes/user.routes')
const RutasArtistas = require('./server/routes/artistas.routes')
const RutasCanciones = require('./server/routes/canciones.routes')
const RutasCategorias = require('./server/routes/categorias.routes')

RutasUsuarios(app)
RutasArtistas(app)
RutasCanciones(app)
RutasCategorias(app)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})