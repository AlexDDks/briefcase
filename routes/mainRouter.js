const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index)

//Aun no entiendo porque se exporta la variable router
module.exports = router;