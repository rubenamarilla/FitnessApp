const Fitness = require("../models/fitness.model");

module.exports.index = (request, response) => {
    response.json({
    message: "Hello World"
    });
}

module.exports.createItem = (request, response) => {
    const { nombre,peso,calorias,objetivo} = request.body;
    Fitness.create({
        nombre,
        peso,
        calorias,
        objetivo,
    })
    .then(fitness => response.json(fitness))
    .catch(err => response.json(err));
}

module.exports.getAllItems = (request, response) => {
    Fitness.find({})
        .then(fitness => response.json(fitness))
        .catch(err => response.json(err))
}

module.exports.getItem = (request, response) => {
    Fitness.findOne({_id:request.params.id})
        .then(fitness => response.json(fitness))
        .catch(err => response.json(err))
}

module.exports.updateItem = (request, response) => {
    Fitness.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedFitness => response.json(updatedFitness))
        .catch(err => response.json(err))
}

module.exports.deleteItem = (request, response) => {
    Fitness.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

//crear usuario
const Register = require("../models/fitness.model");
const Usuario = require("../models/fitness.model");
const jwt = require("jsonwebtoken");
const secret_key = "Esta es mi llave secreta";
// const jwt = require("jsonwebtoken");
// const secret_key = "Esta es mi llave secreta";
const bcrypt = require("bcrypt");
module.exports.register = async (req, res) => {
    try {
        const { usuario, password, email } = req.body;
        console.log(usuario, password, email)
        if (!usuario || !password || !email) {
            return res.status(400).json({ message: "Debe proporcionar un usuario, una contraseña y un correo electrónico" });
        }

        const existingRegister = await Register.findOne({ usuario: usuario });

        if (existingRegister) {
            return res.status(409).json({ message: 'El usuario ya existe' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const register = new Register({
            usuario: usuario,
            password: hashedPassword,
            email: email,
        });

        const result = await register.save();
        res.status(201).json({ message: 'Usuario creado', result: result });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
};



module.exports.login = async (req, res) => {
    try {
        const { usuario, password } = req.body;

        if (!usuario || !password) {
            return res.status(400).json({ message: "Debe proporcionar un usuario y una contraseña" });
        }

        const register = await Register.findOne({ usuario: usuario });

        if (!register) {
            return res.status(401).json({ message: 'La autenticación falló' });
        }

        const result = await bcrypt.compare(password, register.password);

        if (!result) {
            return res.status(401).json({ message: 'La autenticación falló' });
        }

        const token = jwt.sign({ usuario: register.usuario, email: register.email }, secret_key, { expiresIn: '1h' });
        res.status(200).json({ message: 'Autenticación exitosa', token: token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
};

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.status(200).json({ message: "Salimos de sesión!" });
}

module.exports.get_all = (req, res) => {
    Usuario.find()
        .then(usuarios => res.json({ message: usuarios }))
        .catch(err => res.status(400).json({ message: err }));
}
