var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('arduino', { title: 'Arduino & Johnny-Five.io', tagline: 'A collection of some of my projects. Powered by node.js, ,johnny-five.io and socket.io.' });
});

module.exports = router;