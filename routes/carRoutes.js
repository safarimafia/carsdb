const express = require('express');
const carController = require('../controllers/carController');

const router = express.Router();

router.post('/cars', carController.createCar);
router.get('/cars', carController.getAllCars);
router.put('/cars/:id', carController.updateCar);
router.delete('/cars/:id', carController.deleteCar);
router.get('/cars/older-than-5-years', carController.getCarsOlderThanFiveYears);

module.exports = router;
