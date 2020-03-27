const { Router } = require('express');
const UserController = require('./controllers/UserController');
const OrderController = require('./controllers/OrderController');
const SessionController = require('./controllers/SessionController');

const routes = Router();

// Users
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

// Orders
routes.post('/orders', OrderController.store);
routes.get('/orders/:id', OrderController.index);

//login
routes.post('/login', SessionController.post);
module.exports = routes;
