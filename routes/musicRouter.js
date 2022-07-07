const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');


router.get('/', musicController.music)

//Aun no entiendo porque se exporta la variable router
module.exports = router;