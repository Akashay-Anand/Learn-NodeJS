// to run this file use terminal with node and filename command. 
// node 05_Javascript

var x = 20;
console.log(x);

// 'Loose Equality Comparison (==): only check for value
// use '===' for type check also.; to 
if(x == '20') console.log("Yes");
else console.log("No");

// for loop
for(let i = 0; i < 3; i++)
    console.log(i);

const arr = [2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr);
// console.log(arr[3]);

// filter function ; use with array ; traverse or 

// arr.filter((item)=>{
    // console.log(item);
// })

let result  = arr.filter((item)=>{
        return item%2 === 0; // Q) what would be the typr of item and result
        // return item === 3;
})

console.log( "filter = " + result)
