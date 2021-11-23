const express = require('express');
// const bcrypt = require('bcrypt')
// const cors = require('cors');

const router = express.Router();
const db   = require('../config/db');

// db.query('SELECT * from user', (error, rows, fields) => {
//         if (error) throw error;
//         console.log('User info is: ', rows);
//         res.json(rows);
// });
console.log('user');

router.post('/login', async(req, res, next) =>{  //post  /user
    try{

       console.log(req.body)
       console.log(req.body.userId);
       let sql = `SELECT * from user where user_id = '${req.body.userId}'`;
       console.log(sql);
       db.query(sql, (error, rows, fields) => {
            if (error) throw error;
            console.log('User info is: ', );
            // res.json(rows);
            // return res.status(201).send('login');
            for(let record of rows){
                console.log(record);
                return res.json(record);
              }
           
        });
    }catch(error){
        console.error(error);
    }
});

router.post('/logout', async(req, res, next) =>{  //post  /user
    try{
      
        db.query('SELECT * from user', (error, rows, fields) => {
            if (error) throw error;
            console.log('User info is: ', rows);
            return res.json(rows);
        });
    }catch(error){
        console.error(error);
    }
});


console.log('signUp');
router.post('/signUp', async(req, res, next) =>{  //post  /user
    try{
        
        console.log('signUp');
        let sql =  `INSERT INTO user(user_id, password, user_name)VALUES('${req.body.userId}','${req.body.pwd}','${req.body.userName}')`;
        console.log(sql);
        db.query(sql, (error, rows, fields) => {
            if (error) throw error;
          
        });
        
        return res.status(201).send('회원가입 성공');
    }catch(error){
        console.error(error);
    }
});


module.exports = router;