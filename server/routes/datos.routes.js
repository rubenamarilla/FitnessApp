const express = require('express')
const router = express.Router()
const {
    setDatos,
    setSaludo,
} = require('../controllers/datos.controller')

//autenticacion
const {protect} = require('../middleware/authMiddleware')

//rutas
router.post('/createdatos', protect, setDatos)
router.get('/saludo',  protect, setSaludo)

module.exports = router