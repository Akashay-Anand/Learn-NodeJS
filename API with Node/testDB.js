const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();

// console.log(process.env.port);

const port = process.env.port||3131; 

const dburl = process.env.DBurl;

console.log(port)

// mongoose.connect(dburl)
//   .then(() => console.log('Connected!'))
//   .catch(err => console.log(err));

mongoose.connect(dburl)
.then(() => {
    console.log("Connected! to Mongoose")
    app.get('/',(req,res) => {
        res.send("hello world!, the server is working properly and database is also working");
     }).listen(port, () => {
        console.log(`$listening on ${port}`)
     })
}).catch(err => console.log(err));