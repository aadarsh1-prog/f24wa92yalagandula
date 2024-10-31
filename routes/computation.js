var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // Check if 'x' is provided in the query, otherwise generate a random number
  const x = req.query.x ? parseFloat(req.query.x) : Math.random();

  // Apply the math functions
  const froundResult = Math.fround(x);
  const randomResult = Math.random();
  const roundResult = Math.round(x);

  // Prepare the response string with each result on a separate line
  const response = `Math.fround applied to ${x} is ${froundResult}\nMath.random generated ${randomResult}\nMath.round applied to ${x} is ${roundResult}`;
  res.send(response.replace(/\n/g, '<br>'));
});

module.exports = router;
