const {getAll,add}  = require('../controllers/teamController')
const express = require('express');
const router = express.Router()

router.get('/',getAll)
router.post('/add',add)

module.exports = router
