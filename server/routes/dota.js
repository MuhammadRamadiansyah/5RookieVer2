const express = require('express');
const router = express.Router();
const dotaController = require('../controllers/dota.controller.js')

router.get('/getDotaProfile/:dotaId', dotaController.getDotaProfile);

module.exports = router;
