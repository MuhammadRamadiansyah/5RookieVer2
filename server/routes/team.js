const {getAll,add,getOne}  = require('../controllers/teamController')
const express = require('express');
const router = express.Router()

router.get('/',getAll)
router.post('/add',add)
router.get('/:id',getOne)
module.exports = router
