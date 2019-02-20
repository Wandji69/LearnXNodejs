const http = require('http');

const server = http.creatServer((req, res)=> {

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end('<h1>Hi guys this Wandji Collins</h1>');

});

server.listen(9000);
console.log("our server is running");