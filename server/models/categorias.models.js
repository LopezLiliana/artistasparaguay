const mongoose = require('mongoose')

// Schema MODELO aka Tabla aka Colection
const SchemaCategorias = mongoose.Schema({
    descripcion:{
        type: String,
        required: [true, "Por favor ingresa su nombre"],
        minlength: [2, "El nombre debe tener al menos 2 caracteres"]
    },
    valores:{
        type: Number
    },
    promedios:{
        type: Number
    },
    cancionId:{
        type: String
        
    }
})

const Categorias = mongoose.model('Categorias', SchemaCategorias)

module.exports = Categorias