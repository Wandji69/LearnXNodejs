const express = require('express');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());

app.use('/assests', express.static(__dirname + '/public'));

app.use((req, res, next)=>{
    console.log('MIDDLEWARE');
    next ();
});

app.post('/post', (req, res)=>{
    console.log('Its working ${req.body}');
});


app.listen(9999);
console.log('Its Working');