// module
var express = require('express');

// creation server
var app = express();

// request setting event listener
app.use(function (request, response) {
  // creation data
  var output = [];
  for (var i = 0; i < 3; i++) {
    output.push({
      count: i,
      name: 'name - ' + i
    });
  }

  // response
  response.send(output);
});

// excution server
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
