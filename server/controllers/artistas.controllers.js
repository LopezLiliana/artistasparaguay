const Artistas = require('../models/artistas.models')


const obtenerArtistas = (req, res)=>{
    Artistas.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const obtenerArtista = (req, res)=>{
    Artistas.findById(req.params.id)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}


const crearArtistas =  (req, res)=>{
    Artistas.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const editarArtistas = (req, res)=>{
    Artistas.updateOne({_id: req.params.id}, req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const eliminarArtistas = (req, res)=>{
    Artistas.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    obtenerArtistas,
    obtenerArtista,
    crearArtistas,
    editarArtistas,
    eliminarArtistas
}