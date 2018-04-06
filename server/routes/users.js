var express = require('express');
var router = express.Router();

const { login, register, giveToken, getNotification, accept, reject } = require('../controllers/user.controller')

router.post('/login', login)
router.post('/register', register)
router.post('/token', giveToken)
router.get('/home/:id', getNotification)
router.get('/accept/:id', accept)
router.get('/reject/:id', reject)


module.exports = router;
