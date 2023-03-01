const mongoose = require('mongoose')

// Schema MODELO aka Tabla aka Colection
const SchemaCanciones = mongoose.Schema({
    nombre:{
        type: String,
        required: [true, "Por favor ingresa su nombre"],
        minlength: [5, "El nombre debe tener al menos 2 caracteres"]
    },
    audioUrl:{
        type: String,
        required: [true, "Por favor ingresa una url"],
        minlength: [5, "Debe tener al menos 2 caracteres"]
    },
    genero:{
        type: String,
        required: [true, "Por favor ingresa su nombre"]
    },
    clasificacion:{
        type: String,
        required: [true, "Por favor ingrese una frase"],
        minlength: [10, "La frase debe tener al menos 5 caracteres"]
    },
    autorId:{
        type: String
        
    }
})

const Canciones = mongoose.model('Canciones', SchemaCanciones)

module.exports = Canciones