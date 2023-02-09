//read file

const fs = require("fs");

/**  
 * @Desc
 * Takes filepath and logs the contents.
 * @Params
 * filepath string

*/

function readUTF8File(filePath) {
    //call back function
    fs.readFile(filePath,"utf-8",(data,error) => {
        if(error) {
            console.log(error);
            return;
        }
        console.log(data);
    });
}

//non existing file
readUTF8File("./abcd.txt");

//existing file
readUTF8File("./static/files/testFile.txt");


//file with different encoding. will read with missing characters
readUTF8File("./static/files/testFileDifferentEncoding.txt");
