const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/fitness.config')
const port = process.env.PORT || 8000



const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//llamamos a las rutas
app.use('/api/fitness', require('./routes/fitness.routes'))
app.use('/api/users', require('./routes/user.routes'))
app.use('/api/actividad', require('./routes/actividad.routes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))