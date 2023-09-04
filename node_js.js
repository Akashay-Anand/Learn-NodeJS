// modules //////////////////////////////////

console.log("global module");

// fs.writeFileSync("hello.txt", "need to importe 'fs' module");  // error

const fs = require("fs"); // import complete module;
fs.writeFileSync("hello.txt", "this is temporary file created using fs module");
// if file is already exist it will override that.

// const fsw = require("fs").writeFileSync(); // error; dont use '()' at the end;
const fsw = require("fs").writeFileSync;

fsw('temp1.txt', 'this is temporary file created using fs module');


// global variables
console.log(" = " , __dirname);
console.log(" = " + __filename); 


///////////////////////////////////////////////////////

// Process =  

console.log(process)