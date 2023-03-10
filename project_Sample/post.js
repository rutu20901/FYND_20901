// Step 2

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { response } = require('express');

var urlencodedParser = bodyParser.urlPasrser({extended:false});
app.use(express.static('public'));

app.get('/index.html',function(req,res){
    res.sendFile(__dirname + "index.html");
});

app.post('/post',urlencodedParser,function(req,res){
    response - {
        first_name : res.body.first_name,
        last_name : res.body.last_name,
        email : res.body.email,
        mobile : res.body.mobile,
        message : res.body.message
    }
    console.log(response);
    res.send(JSON.stringify(response));
});

//step 3

var server = app.listen(8080,function(){
    console.log("Server is running");
});