<<<<<<< HEAD
const {getAll,add}  = require('../controllers/team.controller')
=======
const {getAll,add,getOne}  = require('../controllers/teamController')
>>>>>>> team
const express = require('express');
const router = express.Router()

router.get('/',getAll)
router.post('/add',add)
router.get('/:id',getOne)
module.exports = router
