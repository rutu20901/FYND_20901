var http = require("http");
var dt = require("./main3.js");

http.createServer(function (req,res) { //callback function
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.getCurrentTime());

    res.end();
}).listen(8000);