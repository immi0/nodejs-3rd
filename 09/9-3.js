var mysql = require('mysql');

var client = mysql.createConnection({
  user: 'root',
  password: '1'
});

client.query('USE Company');
