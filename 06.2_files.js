const { error } = require('console');
const fs = require('fs');
const path = require('path'); 

const dirpath = path.join(__dirname,'randome');
// console.log(dirpath);

// create multiple file using loop 

// for(let i=0; i<5; i++){
//     fs.writeFileSync(dirpath+"/hello"+i+".txt", "a simple text file in loop:");
//     // console.log(i);
// }

// read multiple files

// fs.readdir(dirpath,(err, files)=>{
//     // console.log(file);

//     files.forEach((file)=>{
//         console.log(file)

//     })
// })


// CRUD Operations on files
const path02 = path.join(__dirname,'CRUD');

// create file
// fs.writeFileSync(path02+"/textfile.txt", "a simple text file in");

// Read file
// fs.readFile(path02+"/textfile.txt",'utf8',(err,item)=>{ console.log(item); })

// update file
fs.appendFile(path02+"/textfile.txt","file is updated", (err)=>{ if(!err) console.log("file is updated");})

// rename file
fs.rename(path02+"/textfile.txt",path02+"/anandWorld.txt", (err)=>{ if(!err) console.log("file is updated");})

// delete file
fs.unlinkSync(path02+"/anandWorld.txt",)