// Process is a global object which contains everything related to nodejs
// In Node.js, the process object is a global object that provides information and control over the current Node.js process.

// # common properties and methods of the process object:

// - process.argv: An array that contains command-line arguments passed to the Node.js process. The first element (process.argv[0]) is typically the path to the Node.js executable, and the second element (process.argv[1]) is the path to the JavaScript file being executed. Any additional arguments follow in subsequent array elements.
// - process.env: An object that contains the environment variables for the current process. You can access and modify these variables as needed.
// - process.exit([code]): Terminates the Node.js process with an optional exit code. This is useful for controlling the exit status of your application.
// - process.cwd(): Returns the current working directory of the Node.js process.
// - etc.


// console.log(process); // will print everything related to file/project;

console.log(process.argv); // "argument vector" ; array of arguments

console.log(process.argv[2]); // command "node 09_process hello" ; // output: 'hello' 

// console.log(process.env); // environment

console.log(`Process ID: ${process.pid}`)
console.log(`Platform: ${process.platform}`);
console.log(`Architecture: ${process.arch}`)
console.log(process.memoryUsage());



///////////////////////////////////////////////////////////////////
// we can take input from user and use that to perform any task

// crea file by taking file name from console
// const fs = require('fs');
const fs = require("node:fs");

// use command : node 9_process temp09 "hello process"
// fs.writeFileSync(process.argv[2],process.argv[3]);

// add and delete files
// use command :
    // to add : node 09_process add temp09 "hello process"
    // to delete: node 09_process delete temp09
const index = process.argv;
if (index[2] == 'add'){
    fs.writeFileSync(index[3],index[4]);
}
else if(index[2] == 'delete'){
    fs.unlinkSync(index[3]);
}
else{
    console.log("Invalid input");
}

console.log( fs.readFileSync("temp09",'utf8') )