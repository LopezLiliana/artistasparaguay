const ControladorCategorias = require('../controllers/categorias.controllers')

module.exports = (app) =>{
    app.get('/api/obtenercategorias', ControladorCategorias.obtenerCategorias) 
    app.get('/api/obtenercategoria/:id', ControladorCategorias.obtenerCategoria) 
    app.post('/api/crearcategoria', ControladorCategorias.crearCategorias) 
    app.put('/api/editarcategoria/:id', ControladorCategorias.editarCategorias)
    app.delete('/api/borrarcategoria/:id', ControladorCategorias.eliminarCategorias)
}