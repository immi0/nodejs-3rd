var mysql = require('mysql');

var client = mysql.createConnection({
  user: 'root',
  password: '1',
  database: 'Company'
});

client.query('INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)', [
    'Example', '9_7', 'js'
], function (error, results, fields) {

});
