const ControladorUsuarios = require('../controllers/user.controller')


module.exports = (app) =>{
    app.post('/api/signup', ControladorUsuarios.signUpUsuario)
    app.post('/api/login', ControladorUsuarios.loginUsuario) 
    app.get('/api/logout', ControladorUsuarios.logOutUser) 

}