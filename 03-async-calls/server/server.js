var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/info', function (req, res) {
  const code = req.query.code;
  if (!code) {
    res.send({error: 'No code provided'});
  } else {
    if (code !== 1337) {
      res.send({error: 'Incorrect code provided'});
    } else {
      res.send({data: 'Access granted!'});
    }
  }
});

app.listen(8080, function () {
  console.log('React Native Tutorial - Async Calls Server.');
  console.log('- Listening on port 8080.');)
});
