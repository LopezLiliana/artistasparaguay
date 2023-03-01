const Usuario = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY

module.exports = {

    signUpUsuario: async (req, res) =>{
        try{
            const nuevoUsuario = await Usuario.create(req.body)

            console.log('REGISTRO')
            console.log(req)
            const userToken = jwt.sign({_id:nuevoUsuario._id},  SECRET)
            console.log('signing up')
            res.status(201).cookie('userToken', userToken, {httpOnly:true, expires:new Date(Date.now() + 900000)})
            .json({msg:"Usuario registrado ", user:nuevoUsuario})
            console.log('ENDED')
        }catch(error){
            res.status(401).json(error)
            console.log(error)
        }
    },

    loginUsuario: async (req, res) => {
        const user = await Usuario.findOne({ email: req.body.email })
        if (!user) {
            res.status(400).json({ error: "Invalid Email or Password" })
        } else {
            
            let pass= req.body.password
            console.log(pass)
            bcrypt
                .compare(req.body.password, user.password)
                .then(passwordIsValid => {
                    if (passwordIsValid) {
                        const userToken = jwt.sign({_id: user._id}, SECRET)
                        res.status(201)
                            .cookie('userToken', userToken, {httpOnly:true, expires:new Date(Date.now() )})
                            .json({ msg: "success!" })
                    } else {
                        res.json({ msg: "Invalid Email or Password" });
                    }
                })
                .catch(err => res.json( {msg : err.message }));
        }
    },
    logOutUser:(req,res)=>{
        res.clearCookie('userToken')
        res.json({success:'Usuario salio'})
    }

}