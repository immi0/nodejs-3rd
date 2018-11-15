// extract module
var express = require('express');

// create server
var app = express();

// set first middleware(1)
app.use(function (request, response, next) {
  console.log("First Middleware");
  next();
});

// set Second Middleware(2)
app.use(function (request, response, next) {
  console.log("Second Middleware");
  next();
});

// set Third Middleware(3)
app.use(function (request, response, next) {
  console.log("Third Middleware");
  // response
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<h1>express Basic</h1>');
});

// execute server
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
