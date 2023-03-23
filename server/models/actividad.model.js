const mongoose = require('mongoose')

const ActividadSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' //referenciamos el id del user que completa los campos
    },
    fecha: {
        type: String,
        required: [true]
    },
    hora: {
        type: String,
        required: [true]
    },
    calorias: { type: Number,
        required: [true, 'Por favor ingrese calorias']}, 
    
    pasos: { type: Number,
        required: [true, 'Por favor ingrese sus pasos']},
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('Actividad', ActividadSchema)