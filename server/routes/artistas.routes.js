const ControladorArtistas = require('../controllers/artistas.controllers')

module.exports = (app) =>{
    app.get('/artistas', ControladorArtistas.obtenerArtistas) 
    app.get('/artista/:id', ControladorArtistas.obtenerArtista) 
    app.post('/artistas/create', ControladorArtistas.crearArtistas) 
    app.put('/artistas/edit/:id', ControladorArtistas.editarArtistas)
    app.delete('/artista/delete/:id', ControladorArtistas.eliminarArtistas)
}