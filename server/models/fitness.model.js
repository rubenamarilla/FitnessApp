const mongoose = require('mongoose')

// con este modelo creamos la actividad
const fitnessSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' //referenciamos el id del user que completa los campos
    },
    pasos: {
        type: Number,
        required: [true, 'Por favor ingrese sus pasos']
    },
    calorias: {
        type: Number,
        required: [true, 'Por favor ingrese calorias']
    },
    actividad: {
        type: String,
        required: [true, "Ingrese la actividad"]
    },
    fecha: {
        type: String,
        required: [true, 'Por favor ingrese fecha']
    },
    hora: {
        type: String,
        required: [true, 'Por favor ingrese hora']
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Fitness', fitnessSchema)