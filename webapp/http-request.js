const https = require('http');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/post';

https.get(url, res => {
 
    res.setEncoding('UTF-8');
    let body = '';

    res.on('data', data => {

        body += data;

    });

    res.on('end', ()=>
    {

        fs.writeFile('data.json', body, 'UTF8', (err)=>{

            if(err) return err; 
            console.log('Just pull all the files and create file');
        
        })
    
    })

});
