var express = require('express');
var router = express.Router();

const { login, register, giveToken } = require('../controllers/user.controller')

router.post('/login', login)
router.post('/register', register)
router.post('/token', giveToken)
module.exports = router;
