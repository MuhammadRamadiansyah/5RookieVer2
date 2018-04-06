const {getAll,add}  = require('../controllers/team.controller')
const express = require('express');
const router = express.Router()

router.get('/',getAll)
router.post('/add',add)
module.exports = router
