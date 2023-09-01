const http = require('http');

// basic api 01
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({name: 'Akashay Anand', email: 'akashayanand1@gmail.com'})); // dont forget to stringify it. error resolve
    res.end();
})
// .listen(8080, () => {
//     console.log("server is active at http://localhost:8080");
// })


// api 02 ; take data fron file and then send it

const data = require('./data');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(data)); // dont forget to stringify it. error resolve
    res.end();
})
.listen(8080, () => {
    console.log("server is active at http://localhost:8080");
})

