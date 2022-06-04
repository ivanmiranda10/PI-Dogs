const { Router } = require("express");
const router = Router();
const temperamentController = require("../controllers/TemperamentFunctions.js");

router.get("/temperament", temperamentController.getTemperaments);

module.exports = router;
