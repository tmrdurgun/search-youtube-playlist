var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Search youtube playlist app', desc: 'Search your favorite songs from any movie, series, games through youtube playlist & save.' });
});

module.exports = router;
