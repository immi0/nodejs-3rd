var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true
}));
app.use(function (request, response) { });

app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
