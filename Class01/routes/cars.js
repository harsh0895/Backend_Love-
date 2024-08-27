const express = require('express');
const createCar = require('../controllers/createCar');
const getCar = require('../controllers/getCars');

const router = express.Router();

router.post('/car', createCar);
router.get('/allCars', getCar)

module.exports = router;
