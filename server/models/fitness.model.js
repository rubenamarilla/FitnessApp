const mongoose = require('mongoose');

const FitnessSchema = new mongoose.Schema({
    nombre: { type: String,
    require: [true, 'Por favor ingrese nombre']},
    peso: { type: Number,
    require: [true, 'Por favor ingrese peso']},
    calorias: { type: Number,
    require: [true, 'Por favor ingrese calorias']}, 
    objetivo: { type: Object,
    require: [true, 'Por favor ingrese objetivo']},    
    
    // lastName: {type: String,
    //     require: [true, 'Please add a a lastName']},
    // email: {type: String,
    //     require: [true, 'Please add a email']},
    // lastName: {type: String,
    //     require: [true, 'Please add a a lastName']},    
}, { timestamps: true });

const Fitness = mongoose.model('Fitness', FitnessSchema);
module.exports = Fitness;

const bcrypt = require('bcrypt');

const RegisterSchema = new mongoose.Schema({
    usuario: {type: String},
    password: { type: String, required: true},
    email: {type: String, required: true
    },

}, { timestamps: true });

// add this after RegisterSchema is defined
RegisterSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

RegisterSchema.pre('validate', function (next) {
    console.log(this.confirmPassword);
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

RegisterSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

// const Register = mongoose.model('Register', RegisterSchema);
// module.exports = Register;
module.exports.Register = mongoose.model('Register', RegisterSchema);