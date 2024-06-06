const { Router } = require('express');

const carsRoutes = Router();

const CarsController = require('../controllers/CarsController')

const carsController = new CarsController();

carsRoutes.post('/', carsController.create);
carsRoutes.put('/:id', carsController.update);
carsRoutes.get('/', carsController.index);
carsRoutes.get('/:id', carsController.show);
carsRoutes.delete('/:id', carsController.delete);

module.exports = carsRoutes;
