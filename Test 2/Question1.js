/*
1. One module calling the other 
2. Performing Closure
3. Accessing the FilesStream module to read contents of a text file
4. Creating a module to calculate the compound interest
*/ 


//One module calling the other 
var dt = require("./module.js");

//Calculate compound interest
let principal = 10000, rate = 5,time = 2; 
let A = principal * (Math.pow((1 + rate / 100), time));
let CI = A - principal;
 console.log("Compound interest is " + CI);



//Performing closure
var alert = require('alert');
function one(){
    var name = 'Java';
    function display(){
        alert(name);
    }
}
one();


//the FilesStream module to read contents of a text file
const fs = require("fs");

function readFileStream(filePath){
    fs.readFile(filePath,"utf-8",(data,error) =>{
        if(error){
            console.log(error);
        }
        console.log(data);
    });
}

readFileStream("./demo.txt");







