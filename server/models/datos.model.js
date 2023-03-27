const mongoose = require('mongoose')


const DatosSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' //referenciamos el id del user que completa los campos
    },
    peso: {
        type: Number,
        required: [true, 'Por favor ingrese peso']
    },
    altura: {
        type: Number,
        required: [true, 'Por favor ingrese altura']
    },
    objetivoPasos: {
        type: Number,
        required: [true, 'Por favor ingrese objetivo pasos']
    },
    objetivoCalorias: {
        type: Number,
        required: [true, 'Por favor ingrese objetivo calorias']
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Datos', DatosSchema)