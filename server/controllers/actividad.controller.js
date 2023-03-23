const asyncHandler = require('express-async-handler')

const Actividad = require('../models/Actividad.model')


//
const setActividad = asyncHandler(async (req, res) => {
 
  const actividad = await Actividad.create({
    user: req.user.id,
    calorias: req.body.calorias,
    pasos: req.body.pasos,
    fecha: req.body.fecha,
    hora: req.body.hora
  })

  res.status(200).json(actividad)
})




const setSaludo = asyncHandler(async(req, res) =>{
  res.json({
    msj: "hola"
  })
})

module.exports = {
  
  setActividad,
  setSaludo
}