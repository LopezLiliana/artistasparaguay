const Canciones = require('../models/canciones.models')
const Usuario = require('../models/user.model');
const jwt = require('jsonwebtoken')



const obtenerCanciones = (req, res)=>{
    Canciones.find(req.body)
        .populate({path:"reviews.user"})
        .then( canciones => {
            let temp = []
            canciones.forEach(cancion => {
                let rating = cancion.reviews.reduce((total, siguiente) => total+siguiente.rate,0) / cancion.reviews.length;
                temp.push({cancion,rating});
            });

            return res.status(200).json(canciones);
        })
        .catch(err => {
            res.statusMessage = "Hubo un error al obtener las canciones." + err;
            return res.status(400).end();
        });


}

const obtenerCancion = (req, res)=>{
    Canciones.findById(req.params.id)
    .populate({path:"reviews.user"})
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


const addReview = (request,response) => {
    const {id} = request.params;
    const {review} = request.body;
    let user = null;


    jwt.verify(token,process.env.SECRET,function(err,decode){
        user.findOne({"_id":decode,"token":token},function(err,user){
            if(err) {
                console.log('Error' + err)
            }
        })
    })
    

console.log(user)  
    let newReview=review;
    newReview = {...review, user:'63fe7a1328624467a240e9f0'}
    
    console.log(newReview)
    Canciones.findByIdAndUpdate({_id:id},{$push:{reviews:newReview}}, {new:true})
        .populate({path:"reviews.user"})
        .then(cancion => {
            return response.status(202).json(cancion);
        })
        .catch(err => {
            response.statusMessage = "Hubo un error al agregar una reseña. "+err;
            return response.status(400).end();
        })
}

const removeReview = (request,response) => {
    const {id} = request.params;
    const {reviewId} = request.body; //id de lacanción

    Canciones.findByIdAndUpdate({_id:id}, {$pull:{ reviews : {_id:reviewId}}}, {new:true})
        .populate({path:"reviews.user"})
        .then(review => {
            return response.status(202).json(review);
        })
        .catch(err => {
            response.statusMessage = "Hubo un error al eliminar una reseña. "+err;
            return response.status(400).end();
        })
}


module.exports = {
    obtenerCanciones,
    obtenerCancion,
    crearCanciones,
    editarCanciones,
    eliminarCanciones,
    addReview,
    removeReview,
}