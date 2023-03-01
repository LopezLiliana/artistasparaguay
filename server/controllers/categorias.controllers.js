const Categorias = require('../models/categorias.models')


const obtenerCategorias = (req, res)=>{
    Categorias.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const obtenerCategoria = (req, res)=>{
    Categorias.findById(req.params.id)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}


const crearCategorias =  (req, res)=>{
    Categorias.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const editarCategorias = (req, res)=>{
    Categorias.updateOne({_id: req.params.id}, req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const eliminarCategorias = (req, res)=>{
    Categorias.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    obtenerCategorias,
    obtenerCategoria,
    crearCategorias,
    editarCategorias,
    eliminarCategorias
}