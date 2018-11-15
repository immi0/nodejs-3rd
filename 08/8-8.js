// ¸ğµâÀ» ÃßÃâÇÕ´Ï´Ù.
var express = require('express');

// ­¹ö¸¦ »ı¼ºÇÕ´Ï´Ù.
var app = express();

// ¹Ìµé¿ş¾î¸¦ ¼³Á¤ÇÕ´Ï´Ù.
app.use(function (request, response) {
  // User-Agent ¼Ó¼ºÀ» ÃßÃâÇÕ´Ï´Ù.
  var agent = request.header('User-Agent');

  // ºê¶ó¿ìÀú¸¦ ±¸ºĞÇÕ´Ï´Ù.
  if (agent.toLowerCase().match(/chrome/)) {
    // ÆäÀÌÁö¸¦ Ãâ·ÂÇÕ´Ï´Ù.
    response.send('<h1>Hello Chrome .. !</h1>');
  } else {
    // ÆäÀÌÁö¸¦ Ãâ·ÂÇÕ´Ï´Ù.
    response.send('<h1>Hello express .. !</h1>');
  }
});

// ¼­¹ö¸¦ ½ÇÇàÇÕ´Ï´Ù.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
