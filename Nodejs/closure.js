//var : global scope
//require:import the module
//module:alert
//npm install alert
var alert = require('alert');
function init() //function1 - outer parent
{ //function initialization
    var name = 'Chrome'; //name is local variable created by init
    function displayName(){ //function2 - ineer function , a closure
        //execution:output
        alert(name);
        //use variable declared in the parent function,body of the child function
    }
    //declaring a function doesn't call it
    //so we are calling it explicitly here
    displayName(); //inner/closure/child function
}
init();
//purpose of closure is
//call multiple inner functions by just one outer functions call