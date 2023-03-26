const asyncHandler = require('express-async-handler')
const Datos = require('../models/datos.model')


const setDatos = asyncHandler(async (req, res) => {
 
  const datos = await Datos.create({
    user: req.user.id,
    peso: req.body.peso,
    altura: req.body.altura,
    objetivoPasos: req.body.objetivoPasos,
    objetivoCalorías: req.body.objetivoCalorías
  })

  res.status(200).json(datos)
})

const setSaludo = asyncHandler(async(req, res) =>{
  res.json({
    msj: "hola"
  })
})

module.exports = {
  setDatos,
  setSaludo
}