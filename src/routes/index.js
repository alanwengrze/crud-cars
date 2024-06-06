const { Router } = require('express');

const carsRouter = require('./cars.routes');

const routes = Router();

routes.use('/cars', carsRouter);

module.exports = routes;