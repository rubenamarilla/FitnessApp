const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')


//  Registrar nuevo  usuario
//ruta POST/ api/users/register
// acceso Public
const registerUser = asyncHandler(async (req, res) => {
    const {firstName, lastName, email, password} = req.body

    if(!firstName||!lastName || !email || !password ){
        res.status(400)
        throw new Error('Por favor complete los campos')
    }

    //Comprobamos si el usuario existe
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('Usuario ya existe')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //creamos el usuario
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user.id)
        })
    } else{
        res.status(400)
        throw new Error('Dato del usuario invalido')
    }
    // res.json({ message: 'Register User'})
});


//  Autenticacion de usuario
//ruta POST/ api/users/login
// acceso Public
const loginUser = asyncHandler (async (req, res) => {
    const {email, password} = req.body

    //Comprobamos por usuario email
    const user = await User.findOne({email})
    //comparamos la contraseña cifrada
    if(user && (await bcrypt.compare(password, user.password))){
    res.json({
        _id: user.id,
        usuario: user.usuario,
        email: user.email,
        token: generateToken(user.id)
    })
    }   else{
        res.status(400)
        throw new Error('Credenciales invalidas')
    }
})

//  traemos datos del usuario
//ruta GET/ api/users/user
// acceso Private
const getUser = asyncHandler(async (req, res) => {
    // res.json({ message: 'User data display'})
    const {_id, usuario, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        usuario,
        email,
    })
})

//Generamos JWT
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
module.exports = {
    registerUser,
    loginUser,
    getUser,
}
