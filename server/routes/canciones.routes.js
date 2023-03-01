const ControladorCanciones = require('../controllers/canciones.controllers')

module.exports = (app) =>{
    app.get('/api/obtenercanciones', ControladorCanciones.obtenerCanciones) 
    app.get('/api/obtenercancion/:id', ControladorCanciones.obtenerCancion) 
    app.post('/api/crearcancion', ControladorCanciones.crearCanciones) 
    app.put('/api/editarcancion/:id', ControladorCanciones.editarCanciones)
    app.delete('/api/borrarcancion/:id', ControladorCanciones.eliminarCanciones)
}