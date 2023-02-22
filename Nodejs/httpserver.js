//const express = require("express");
//const app = express();

const http = require("http");
http.createServer(function (req,res) { //callback function
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("hello world");

    res.end();
}).listen(8080);