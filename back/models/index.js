// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'root1234!',
//     database : 'my_db'
//   });

//   connection.connect();

  
 

// var sql = 'INSERT INTO user(user_id, password, user_name)VALUES(?,?,?)';

// var params = ['test_id','1234','정이안'];
// connection.query(sql,params,function(err,rows,fields) {
//   if(err){
//     console.log(err);
//   }else{
//     console.log(rows.insertId);
//   }
// });

//   connection.query('SELECT * from user', (error, rows, fields) => {
//     if (error) throw error;
//     console.log('User info is: ', rows);
    
//     return router;
//   });
  
//   connection.end();