const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{

    console.log(req,method);

    if(req.url == '/'){

        fs.readFile('./globbal.html', 'UTF-8', (err, data) =>{

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('data');
    
        })

    }

        else {
            res.writeHead(400, {'Content-Type': 'text/plain'});
            res.end('404 ERROR Could not find your page');
        
    }

}).listen(3333);
console.log("Listening");
