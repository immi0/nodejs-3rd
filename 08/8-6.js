// extract module
var express = require('express');

// create server
var app = express();

// setting midleware
app.use(function (request, response, next) {
  // respnse 
  response.status(404).send('<h1>ERROR</h1>');
});

app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
