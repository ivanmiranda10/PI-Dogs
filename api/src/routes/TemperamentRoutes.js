const { Router } = require("express");
const router = Router();
const getTemperaments = require('../controllers/TemperamentFunctions.js');


router.get('/temperament', getTemperaments);


module.exports = router

