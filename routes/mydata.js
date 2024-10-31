var express = require('express');
var router = express.Router();

/* GET Interesting Fact. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Gokul Aadarsh Yalagandula' });
});

module.exports = router;
