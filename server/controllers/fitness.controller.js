const asyncHandler = require('express-async-handler')

const Fitness = require('../models/fitness.model')
const User = require('../models/user.model')

//  Traemos datos de fitness
// ruta   GET /api/fitness/items
// acceso  Private
const getItems = asyncHandler(async (req, res) => {
  const items = await Fitness.find({ user: req.user.id }).sort({fecha: -1, hora: -1})

  res.status(200).json(items)
})

// creamos datos de fitness
// ruta   POST /api/fitness/create
// acceso  Private
const setItem = asyncHandler(async (req, res) => {
 
  const item = await Fitness.create({
    user: req.user.id,
    pasos: req.body.pasos,
    calorias: req.body.calorias,
    actividad: req.body.actividad,
    hora: req.body.hora,
    fecha: req.body.fecha,
  })

  res.status(200).json(item)
})

// GET /api/fitness/item/:id
// access private
const getItem = asyncHandler(async (req, res) => {
  const item = await Fitness.findById(req.params.id)

  if (!item) {
    res.status(400)
    throw new Error('Item no encontrado')
  }

  // Checkeamos el usuario
  if (!req.user) {
    res.status(401)
    throw new Error('Usuario no encontrado')
  }

  // Aseguramos de que el usuario que inició sesión coincida con el usuario del elemento
  if (item.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Usuario no autorizado')
  }

  const getItem = await Fitness.findById(req.params.id)

  res.status(200).json(getItem)

})

// Modificamos Item
// ruta   PUT /api/fitness/:id
// acceso  Private
const updateItem = asyncHandler(async (req, res) => {
  const item = await Fitness.findById(req.params.id)

  if (!item) {
    res.status(400)
    throw new Error('Item no encontrado')
  }

  // Checkeamos el usuario
  if (!req.user) {
    res.status(401)
    throw new Error('Usuario no encontrado')
  }

  // Aseguramos de que el usuario que inició sesión coincida con el usuario del elemento
  if (item.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Usuario no autorizado')
  }

  const updateItem = await Fitness.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updateItem)
})

//     Eliminar item
// ruta   DELETE /api/fitness/:id
// acceso  Private
const deleteItem = asyncHandler(async (req, res) => {
  const item = await Fitness.findById(req.params.id)

  if (!item) {
    res.status(400)
    throw new Error('Item no encontrado')
  }

  // Checkeamos el usuario
  if (!req.user) {
    res.status(401)
    throw new Error('Usuario no encontrado')
  }

// Aseguramos de que el usuario que inició sesión coincida con el usuario del elemento
  if (item.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Usuario no autorizado')
  }

  await Fitness.deleteOne({_id: req.params.id})

  res.status(200).json({ id: req.params.id })
})



module.exports = {
  getItems,
  getItem,
  setItem,
  updateItem,
  deleteItem,

}