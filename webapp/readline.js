var readline = require('readline');
var util = require;

var RL = readline.createInterface(process.stdin, process.stdout);
RL.question('what is your name? ', (name)=>{

    RL.setPrompt('${name} How old are you? ');
    
    RL.prompt();

    RL.on('Line', (age)=>{
       
        if(age < 18)
        {
            util.log('${name.trim()} Because you are ${age} years old, you cannot proceed');
            RL.close();
        }

        else 
        {
            util.log('${name.trim()} isngreat that you are ${age} year old, Because now you can use our services');
            RL.close();
        }
    
    });

});