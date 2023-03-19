const Artistas = require('../models/artistas.models')
const Canciones = require('../models/canciones.models')


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
    .populate({path:"canciones.cancion"})
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

const addCancion = (request,response) => {
    const {id} = request.params;
    const {canciones} = request.body;
    console.log('can: ')
    console.log(canciones)
    Artistas.findByIdAndUpdate({_id:id},{$push:{canciones:canciones}}, {new:false})
    .then(newcancion => {
            console.log(newcancion)
            return response.status(202).json(newcancion);
        })
        .catch(err => {
            response.statusMessage = "Hubo un error al agregar una cancion. "+err;
            return response.status(400).end();
        })
}

const removeCancion = (request,response) => {
    const {id} = request.params;
    const {cancion} = request.body;
    console.log('can: ')
    console.log(cancion)
    Artistas.findByIdAndUpdate({_id:id},{$pull:{canciones:cancion}}, {new:true})
    .then(newcancion => {
            console.log(newcancion)
            return response.status(202).json(newcancion);
        })
        .catch(err => {
            response.statusMessage = "Hubo un error al agregar una cancion. "+err;
            return response.status(400).end();
        })
}



module.exports = {
    obtenerArtistas,
    obtenerArtista,
    crearArtistas,
    editarArtistas,
    eliminarArtistas,
    addCancion,
    removeCancion
}