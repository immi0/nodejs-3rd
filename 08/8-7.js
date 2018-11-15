// extract module
var express = require('express');

// create server
var app = express();

// setup middleware
app.use(function (request, response) {
  // User-Agent �Ӽ��� �����մϴ�.
  var agent = request.header('User-Agent');
  console.log(request.headers);
  console.log(agent);

  // response 
  response.sendStatus(200);
});

// ������ �����մϴ�.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
