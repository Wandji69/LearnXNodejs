const https = require('https');
const http = require('http');
const fs = reequire('fs');

const url = 'https://jsonplaceholder.typicode.com/post';

http.createServer((req, serverRes) =>{

    if (req.method === 'Get' && res.url === '/post'){

        http,get(url, (httpRes)=> {
            httpRes.on('data', data => {
                httpRes.setEncoding('utf8');
                console.log(data);
                serverRes.write(data);

                });

            httpRes.on('end', () => {
                serverRes.end();
                console.log('its over');

            });


        });
    }
    else {
        serverRes.write(404, {'Content-Type': 'text/plain'});
       
        serverRes.end('404 ERROR, Could not find what you where looking for');

    }

    

}).listen(4000);
console.log('Server is listening');
