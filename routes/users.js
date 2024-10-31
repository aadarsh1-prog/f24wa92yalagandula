var express = require('express');
var router = express.Router();
let value = 0;
let sum = 1;
/* GET users listing. */
router.get('/', function(req, res, next) {
  value += 2;    
  sum *= value;   

  res.send(`Total is: ${sum}`);
});


module.exports = router;

