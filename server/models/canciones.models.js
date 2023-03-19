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
        minlength: [5, "Debe tener al menos 5 caracteres"]
    },
    genero:{
        type: String,
        required: [true, "Por favor ingresa su nombre"]
    },
    clasificacion:{
        type: String,
        required: [true, "Por favor ingrese una frase"],
        minlength: [5, "La frase debe tener al menos 5 caracteres"]
    },
    autorId: {
        type:String
    },
    
    reviews:[{
        user:{
            type:mongoose.Types.ObjectId,
            ref:"Usuario",
            required:[false, "El usuario es requerido."]
        },
        rate:{
            type:Number,
            min:[0,"El rating debe ser mínimo 0."],
            max:[5,"El rating debe ser máximo 5."],
            required:[true, "El rating es requerido."]
        },
        description:{
            type:String,
            required:[true, "La descripcion es requerido."],
            minlength:[10,"La descripción debe tener minimo 10 caracteres."]
        }
    }]
})

const Canciones = mongoose.model('Canciones', SchemaCanciones)

module.exports = Canciones