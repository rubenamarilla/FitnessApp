const FitnessController = require('../controllers/fitness.controller');
const {authenticate, admin} = require('../config/jwt.config');

module.exports = function(app){
    app.get('/api', FitnessController.index);
    app.post('/api/test', FitnessController.createItem);
    app.get('/api/test', FitnessController.getAllItems);
    app.get('/api/test/:id', FitnessController.getItem);
    app.put('/api/test/:id', FitnessController.updateItem);
    app.delete('/api/test/:id', FitnessController.deleteItem);
    app.post('/api/register', FitnessController.register);
    app.post('/api/login', FitnessController.login);
    app.get('/api/logout', FitnessController.logout);
    app.get('/api/users', authenticate, FitnessController.get_all);
    app.get('/api/users/all',admin, FitnessController.get_all);
    app.get("/api/admin",admin,(req, res) =>{ res.status(200).json({})})
}