const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index)
router.get('/photos', mainController.photos)
router.get('/music', mainController.music)

//Aun no entiendo porque se exporta la variable router
module.exports = router;