var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (request, response) { });
app.get('/login', function (request, response) { });
app.post('/login', function (request, response) { });

app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
