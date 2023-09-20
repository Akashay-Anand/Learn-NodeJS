require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();


const port = process.env.port||3030;
const dburl = process.env.DBurl

// console.log(dburl)

app.get('/', (req, res) => {
    res.send("Hello, world!");
});



mongoose.connect(dburl)
.then(() => {
    console.log("Database connection")    
    app.get('/hello', (req, res) => {
        res.send("ok got it ");
    });

}).catch(err => {console.log(err)});


app.listen(port, () => console.log("server is active at " + port))