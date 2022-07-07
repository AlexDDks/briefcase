const express = require('express');
const router = express.Router();
const photosController = require('../controllers/photosController');


router.get('/', photosController.photos)


//Aun no entiendo porque se exporta la variable router
module.exports = router;