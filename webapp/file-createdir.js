const fs = require('fs');

    if(!fs.exists("views")) {

            fs.mkdir("views", (err)=>{


        if(err) return err;


        fs.writeFile("./veiws/new.html", 'this a new dir and data', (err)=>{

            if(err) return err;

            console.log('Directory and Files save');

        })
    });
    
}