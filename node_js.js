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

// console.log(process)

///////////////////////////////////

fs.readFile('hello.txt','utf-8', (err, data) => {
    if(err) console.log(err);
    else console.log(data);
});
console.log("data = ");

const val = fs.readFileSync('hello.txt','utf-8');
console.log("val = " , val);

console.log("data 1 ");
console.log("data 2 ");
console.log("data 3 ");
console.log("data 4 ");
console.log("data 5 ");
console.log("data 6 ");
console.log("data 7 ");
console.log("data 8 ");
console.log("data 9 ");
console.log("data 10 ");
console.log("data 11");
console.log("data 12");
console.log("data 13");
console.log("data 14");
console.log("data 15");
console.log("data 16");
console.log("data 17");
console.log("data 18");
console.log("data 19");
console.log("data 20");
console.log("data 21");
console.log("data 22");
console.log("data 23");
console.log("data 24");
console.log("data 25");
console.log("data 26");
console.log("data 27");
console.log("data 28");
console.log("data 29");
console.log("data 30");
console.log("data 30");
console.log("data 30");
console.log("data 30");
console.log("data 30");
console.log("data 30");
console.log("data 30");
console.log("data 30");
console.log("data 30");
console.log("data 30");
console.log("data 40");
console.log("data 40");
console.log("data 40");
console.log("data 40");
console.log("data 40");
console.log("data 40");
console.log("data 40");
console.log("data 40");
console.log("data 40");
console.log("data 40");
console.log("data 50");
console.log("data 50");
console.log("data 50");
console.log("data 50");
console.log("data 50");
console.log("data 50");
console.log("data 50");
console.log("data 50");
console.log("data 50");
console.log("data 50");
console.log("data 60");
console.log("data 60");
console.log("data 60");
console.log("data 60");
console.log("data 60");
console.log("data 60");
console.log("data 60");
console.log("data 60");
console.log("data 60");
console.log("data 60");
console.log("data 70");
console.log("data 70");
console.log("data 70");
console.log("data 70");
console.log("data 70");
console.log("data 70");
console.log("data 70");
console.log("data 70");
console.log("data 70");
console.log("data 80");
console.log("data 80");
console.log("data 80");
console.log("data 80");
console.log("data 80");
console.log("data 80");
console.log("data 80");
console.log("data 80");
console.log("data 80");
console.log("data 80");
console.log("data 90");
console.log("data 90");
console.log("data 90");
console.log("data 90");
console.log("data 90");
console.log("data 90");
console.log("data 90");
console.log("data 90");
console.log("data 100");

