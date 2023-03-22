const mongoose = require('mongoose')

const fitnessSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' //referenciamos el id del user que completa los campos
    },
    peso: { type: Number,
        required: [true, 'Por favor ingrese peso']},
    calorias: { type: Number,
        required: [true, 'Por favor ingrese calorias']}, 
    objetivo: { type: Object,
        required: [true, 'Por favor ingrese objetivo']},   //agregar altura y pasos 
    altura: { type: Number,
        required: [true, 'Por favor ingrese altura']},
    pasos: { type: Number,
        required: [true, 'Por favor ingrese sus pasos']},
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('Fitness', fitnessSchema)