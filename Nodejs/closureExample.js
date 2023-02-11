/**
 * Three function example that i come across.
 */

function outerScope(){
    const result = [];
    function innerScope(){
    for(let i =0;i<5;i++){
        //This is just storing the execution of the outer functions
        result[i] = (function inner(x){
            // additional enclosing context
            return function () {
                 console.log(x);
            };
        })(i);
    }
}
innerScope();
for(let i=0;i<5;i++)
{
    result[i]();
}
}
outerScope();
