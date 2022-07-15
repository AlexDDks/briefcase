const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index)
router.get('/prueba', mainController.prueba)



module.exports = router;