const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    lastName :{
        type: String,
        required: [true, 'Por favor ingrese usuario']
    },
    firstName :{
        type: String,
        required: [true, 'Por favor ingrese usuario']
    },
    email :{
        type: String,
        required: [true, 'Por favor ingrese email'],
        unique: true
    },
    password :{
        type: String,
        required: [true, 'Por favor ingrese contraseña']
    },
    
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)