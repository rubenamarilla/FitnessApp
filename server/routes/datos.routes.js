const express = require('express')
const router = express.Router()
const {
    setDatos,
    getDatos,
    getDato,
    updateDato
} = require('../controllers/datos.controller')

//autenticacion
const {protect} = require('../middleware/authMiddleware')

//rutas
router.post('/createdatos', protect, setDatos)
router.get('/get',  protect, getDatos)
router.get('/get/:id',  protect, getDato)
router.put('/edit/:id',  protect, updateDato)

module.exports = router