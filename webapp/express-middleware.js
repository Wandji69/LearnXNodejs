const express = require('express');
let app = express();

app.use('/css', express.static(__dirname + '/public'));

app.use('/css', (req, res, next)=>{
    console.log('MIDDLEWARE');
    next ();
});

app.get('/', (req, res)=>{

    res.send(`

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Blog your thought</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/style.css"/>
</head>
<body>
    
<h1>Hello</h1>
 
<p> 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Ipsa, beatae, impedit assumenda vero aut numquam harum earum mollitia magni ratione molestiae ducimus itaque recusandae, 
    error exercitationem dignissimos dicta saepe? Perferendis? 
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Facilis accusamus qui sequi unde delectus aliquam consectetur deserunt quod, 
    pariatur ad, incidunt eaque, nam eligendi similique repellat quae modi veritatis culpa.
</p>

</body>
</html> `);
});

app.listen(9999);
console.log('Its Working');