const ControladorCanciones = require('../controllers/canciones.controllers')

module.exports = (app) =>{
    app.get('/canciones', ControladorCanciones.obtenerCanciones) 
    app.get('/cancion/:id', ControladorCanciones.obtenerCancion) 
    app.post('/canciones/create', ControladorCanciones.crearCanciones) 
    app.put('/canciones/edit/:id', ControladorCanciones.editarCanciones)
    app.delete('/canciones/delete/:id', ControladorCanciones.eliminarCanciones)
    app.put("/review/:id",ControladorCanciones.addReview);
    app.delete("/removeReview/:id",ControladorCanciones.removeReview);
}