var http = require("http");
var dt = require("./main.js");

http.createServer(function (req,res) { //callback function
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hey...");

    res.end();
}).listen(8083);