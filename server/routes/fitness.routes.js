const FitnessController = require('../controllers/fitness.controller');

module.exports = function(app){
    app.get('/api', FitnessController.index);
    app.post('/api/test', FitnessController.createItem);
    app.get('/api/test', FitnessController.getAllItems);
    app.get('/api/test/:id', FitnessController.getItem);
    app.put('/api/test/:id', FitnessController.updateItem);
    app.delete('/api/test/:id', FitnessController.deleteItem);
}