var http = require("http");
var dt = require("./main2.js");

http.createServer(function (req,res) { //callback function
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.getCurrentDate());

    res.end();
}).listen(8080);
//it canot not run one port to another port servers are run on port numbers


//if we created two module on server then another module was not run on server