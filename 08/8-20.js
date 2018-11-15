var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan(':method + :date'));
app.use(function (request, response) {
  response.send('<h1>express Basic</h1>');
});

app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
