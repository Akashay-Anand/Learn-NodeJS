// exporting importing files 

let x = "Anand";

// wrong
// export x; // Node doesn't support basic export, import

// right
// module.exports = x; // export with module
module.exports = {x, age: 20}; // export object

