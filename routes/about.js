var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About my node.js web server', tagline: 'Powered by node.js, express.js (backend), PUG/HTML/CSS (frontend) and bootStrap 4 (theme). Using Visual Studio Code.' });
});

module.exports = router;