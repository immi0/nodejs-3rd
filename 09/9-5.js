var mysql = require('mysql');

var client = mysql.createConnection({
  user: 'root',
  password: '1'
});

client.query('USE Company');
client.query('SELECT * FROM products', function(error, result, fields) {
  if(error) {
    console.log('Error occured.');
  } else {
    console.log(result);
  }
});
