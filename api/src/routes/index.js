const { Router } = require('express');

const dogRoutes = require('./DogRoutes.js');
const temperamentRoutes = require('./TemperamentRoutes.js');

const router = Router();

router.use('/', dogRoutes);
router.use('/', temperamentRoutes);


module.exports = router;
