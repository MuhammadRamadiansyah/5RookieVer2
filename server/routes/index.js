var express = require('express');
var router = express.Router();

const twitterController = require('../controllers/twitter.controller')
const inviteController = require('../controllers/invitation.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('tee')
  res.render('index', { title: 'Express' });
});

router.post('/api/share-twitter', twitterController.shareTwitter)
router.post('/api/invite', inviteController.addInvite)
router.get('/api/check-token', twitterController.checkToken)

module.exports = router;
