const asyncHandler = require('express-async-handler')
const Datos = require('../models/datos.model')


const setDatos = asyncHandler(async (req, res) => {
 
  const datos = await Datos.create({
    user: req.user.id,
    peso: req.body.peso,
    altura: req.body.altura,
    objetivoPasos: req.body.objetivoPasos,
    objetivoCalorias: req.body.objetivoCalorias
  })

  res.status(200).json(datos)
})

const getDatos = asyncHandler(async (req, res) => {
  const datos = await Datos.find({ user: req.user.id })

  res.status(200).json(datos)
})

const getDato = asyncHandler(async (req, res) => {
  const dato = await Datos.findById(req.params.id)

  if (!dato) {
    res.status(400)
    throw new Error('Dato no encontrado')
  }

  // Checkeamos el usuario
  if (!req.user) {
    res.status(401)
    throw new Error('Usuario no encontrado')
  }

  // Aseguramos de que el usuario que inició sesión coincida con el usuario del elemento
  if (dato.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Usuario no autorizado')
  }

  const getDato = await Datos.findById(req.params.id)

  res.status(200).json(getDato)

})

const updateDato = asyncHandler(async (req, res) => {
  const dato = await Datos.findById(req.params.id)

  if (!dato) {
    res.status(400)
    throw new Error('Dato no encontrado')
  }

  // Checkeamos el usuario
  if (!req.user) {
    res.status(401)
    throw new Error('Usuario no encontrado')
  }

  // Aseguramos de que el usuario que inició sesión coincida con el usuario del elemento
  if (dato.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Usuario no autorizado')
  }

  const updateDato = await Datos.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updateDato)
})

module.exports = {
  setDatos,
  getDatos,
  getDato,
  updateDato
}