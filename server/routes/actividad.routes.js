const express = require('express')
const router = express.Router()
const {
    setActividad,
    setSaludo,
} = require('../controllers/actividad.controller')

//autenticacion
const {protect} = require('../middleware/authMiddleware')

//rutas
router.post('/createactividad', protect, setActividad)
router.get('/createactividad',  protect, setSaludo)

module.exports = router