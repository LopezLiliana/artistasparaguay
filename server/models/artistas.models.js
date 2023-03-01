const mongoose = require('mongoose')

// Schema MODELO aka Tabla aka Colection
const SchemaArtistas = mongoose.Schema({
    nombre:{
        type: String,
        required: [true, "Por favor ingresa su nombre"],
        minlength: [2, "El nombre debe tener al menos 2 caracteres"]
    },
    imageUrl:{
        type: String
    },

    nombreArtistico:{
        type: String,
        required: [true, "Por favor ingresa su nombre"]
    },

    lugarNacimiento:{
        type: String,
        required: [true, "Por favor ingresa su nombre"],
        minlength: [2, "El nombre debe tener al menos 2 caracteres"]
    },

    descripcion:{
        type: String,
        required: [true, "Por favor ingresa su nombre"],
        minlength: [15, "El nombre debe tener al menos 2 caracteres"]
    },
    fechaNacimiento:{
        type: Date,
        required: [true, "Por favor ingresa un valor en HookHand"]
    }
})

const Artistas = mongoose.model('Artistas', SchemaArtistas)

module.exports = Artistas