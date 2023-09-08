/*
- REST API -
*/

const express = require('express');
app = express();
const port = 8080;

app.get('/api',(req, res) => {
    res.send('Welcome')
})


app.listen(port, () =>{
    console.log("Listening on port " + port);
});



// my article on restfull api
// https://medium.com/@akashayanand1/rest-architecture-api-6b1e8bbc23d2