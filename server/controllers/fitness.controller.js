const Fitness = require("../models/fitness.model");

module.exports.index = (request, response) => {
    response.json({
    message: "Hello World"
    });
}

module.exports.createItem = (request, response) => {
    const { name} = request.body;
    Fitness.create({
        name,
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