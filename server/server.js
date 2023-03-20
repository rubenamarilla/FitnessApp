require('dotenv').config()
const cookieParser = require('cookie-parser');
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
require('./config/fitness.config');
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000"
    })
)

// app.use(cors());

//Cookies
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/fitness.routes')(app);

app.listen(port, () => {
    console.log("Listening at Port 8000")
})