const Canciones = require('../models/canciones.models')


const obtenerCanciones = (req, res)=>{
    Canciones.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const obtenerCancion = (req, res)=>{
    Canciones.findById(req.params.id)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}


const crearCanciones =  (req, res)=>{
    Canciones.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const editarCanciones = (req, res)=>{
    Canciones.updateOne({_id: req.params.id}, req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const eliminarCanciones = (req, res)=>{
    Canciones.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    obtenerCanciones,
    obtenerCancion,
    crearCanciones,
    editarCanciones,
    eliminarCanciones
}