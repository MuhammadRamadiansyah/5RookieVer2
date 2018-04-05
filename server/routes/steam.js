const express = require('express');
const router = express.Router();
const steamController = require('../controllers/steam.controller.js')

// router.get('/', function(req, res){
//     res.send("testing")
// })
router.get('/getProfile/:steamId', steamController.getSteamProfile);

module.exports = router;
