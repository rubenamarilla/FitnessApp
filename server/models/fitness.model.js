const mongoose = require('mongoose');

const FitnessSchema = new mongoose.Schema({
    name: { type: String,
    require: [true, 'Please add a name']},
    // lastName: {type: String,
    //     require: [true, 'Please add a a lastName']},
    // email: {type: String,
    //     require: [true, 'Please add a email']},
    // lastName: {type: String,
    //     require: [true, 'Please add a a lastName']},    
}, { timestamps: true });

const Fitness = mongoose.model('Fitness', FitnessSchema);
module.exports = Fitness;