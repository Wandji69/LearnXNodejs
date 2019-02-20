const fs = require('fs');

fs.writeFile('./module/data.html', ' \n Hello this file has just been created \n ', 'utf-8',(err)=>{
    if (err) return err;

    console.log("The file hase been saved.")
});


fs.appendFile('./module/data.html', ' \n Extra data saved to file \n ', 'utf-8',(err)=>{
    if (err) return err;

    console.log("The file hase been saved.")
});