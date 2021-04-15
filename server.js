const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Deep@123',
    database:'employeeDB'
});

mysqlConnection.connect((error)=> {
    if (!error) {
        console.log("DB Conection SucessFull");
    }else{
        console.log("DB Connection Failed: "+JSON.stringify(error, undefined,2));
    }
});

app.listen(3000, () => {
    console.log("Express server is Runing at Port: 3000");
});

//Get all 
app.get('/employees', (req, res)=>{
    mysqlConnection.query('select * from employee',(err, rows, filed)=>{
        if (!err) {
            res.send(rows)
        }else{
            res.send(err);
        }
    })
});