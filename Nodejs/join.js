var mysql = require('mysql');

var con = mysql.createConnection({
    hosts: "localhost",
    user : "root",
    password: "",
    database: "mydb"
});

con.connect(function(err,res){
    if(err) throw err;
    var sql = "SELECT users.name AS user, products.name AS favourite FROM users JOIN products ON users.favourite_";

    con.query(sql,function(err,result) {
        if(err) throw err;
        console.log(result);
    });
});