var express = require('express');
var router = express.Router();
const { login, register, giveToken } = require('../controllers/user.controller')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', login)
router.post('/register', register)
router.post('/token', giveToken)
module.exports = router;
