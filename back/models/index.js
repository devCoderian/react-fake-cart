console.log('model -> index.js');
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root1234!',
    database : 'my_db'
  });

  connection.connect();

  connection.query('SELECT * from Users', (error, rows, fields) => {
    if (error) throw error;
    console.log('User info is: ', rows);
  });
  
  connection.end();