// Creating a basic server using nodejs core modules
const http = require('http'); // handle req, res

///// Server 01; returns normal text and html
http.createServer(function (req, res){
    res.setHeader("Content-Type", "text/html");
    res.write(" Hello world "); // should have some orgument of type string;
    res.write("<h2> this is html </h2>");  // html

    res.end(" end of response"); // we can send text at the end of response (optional)
})
// .listen(8080);

// Request(req) comes to serve; it can contain some sort of data also ; like form data...
// Response(res) outputs sended from the server to client.



///// server 02; use independent function
function serve(req, res) {
    res.write(" use this function ");
    res.end();
}
http.createServer(serve)
// .listen(8080);

///// server 03; use listen separately
const server = http.createServer((req, res) => {
    res.write(" listen server ");
    res.end();
});
// server.listen(8080);


///// server 04; modify listen
server.listen(8080,() => {
    console.log("listen server on 8080")
});