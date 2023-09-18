console.log("HEllo Anand");

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.end('Welcome to the API server')
});

app.listen(port,()=>{
    console.log("Api App is active on 3000")
});

