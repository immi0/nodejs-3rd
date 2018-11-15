var fs = require('fs');
var express = require('express');
var multipart = require('connect-multiparty');

var app = express();

var multipartMiddleware = multipart({ uploadDir: __dirname + '/multipart' });

app.get('/', function (request, response) {
  fs.readFile('8-26.html', function (error, data) {
    response.send(data.toString());
  });
});
app.post('/', multipartMiddleware, function (request, response) {
  var comment = request.body.comment;
  var imageFile = request.files.image;
  if (imageFile) {
    var name = imageFile.name;
    var path = imageFile.path;
    var type = imageFile.type;
    if (type.indexOf('image') != -1) {
      var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
      fs.rename(path, outputPath, function (error) {
        response.redirect('/');
      });
    } else {
      fs.unlink(path, function (error) {
        response.sendStatus(400);
      });
    }
  } else {
    response.sendStatus(404);
  }
});

app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
