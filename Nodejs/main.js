var http = require("http");
var dt = require("./ownModule.js");

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.getCurrentDate());

    res.end();
}).listen(8080);