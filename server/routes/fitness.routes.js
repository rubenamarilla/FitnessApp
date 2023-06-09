const express = require('express')
const router = express.Router()
const {
    getItems,
    getItem,
    setItem, 
    updateItem, 
    deleteItem,
} = require('../controllers/fitness.controller')

//autenticacion
const {protect} = require('../middleware/authMiddleware')

//rutas
router.get('/items', protect, getItems)
router.get('/item/:id', protect, getItem)
router.post('/create', protect, setItem)
router.put('/:id', protect, updateItem)
router.delete('/:id', protect, deleteItem)


module.exports = router