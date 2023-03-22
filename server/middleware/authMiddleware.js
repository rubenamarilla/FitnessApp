const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')

const protect = asyncHandler(async (req, res, next) => {
    let token
    if(req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')){
        try {
            //Tomamos el token de cabecera
            token = req.headers.authorization.split(' ')[1]

            //Verificamos el token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Obtenemos el token del usuario
            req.user = await User.findById(decoded.id).select('-password')

            next() //llamando a la siguiente pieza del middleware
        } catch (error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')       

        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }

})

module.exports = {protect}