var express = require('express');
var router = express.Router();

const twitterController = require('../controllers/twitter.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/share-twitter', twitterController.shareTwitter)

module.exports = router;
