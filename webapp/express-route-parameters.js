const express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('HOME');
});

app.get('/post/:id/', (req, res)=>{
    res.send(`
    
        <p>Here is $(req.params.id)</p>
    `);

});

app.listen(9999);
console.log('Its working');

