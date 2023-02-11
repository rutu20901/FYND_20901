var fs = require('fs');//events is an inbuilt, we didn't import events
//it import the filestream from the node modules 
//fs = filestream is an inbuilt module
//module:
//collection of functionalities
var rs = fs.createReadStream('./demofile.txt');
//events = action performed on an object
//var is a shortform for variable used to store local values

//reading the outside placed demotext file
rs.on('open',function (){
    console.log('The file is open');
});