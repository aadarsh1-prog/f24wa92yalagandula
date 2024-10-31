var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // Check if 'x' is provided in the query, otherwise generate a random number
  const x = req.query.x ? parseFloat(req.query.x) : Math.random();
  
  // Apply the math function based on last digit of ID (2 -> Math.fround)
  const y = Math.fround(x);

  // Prepare the response string
  const response = `Math.fround applied to ${x} is ${y}`;
  res.send(response);
});

module.exports = router;

