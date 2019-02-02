// console.log (process.argv);

// var flag = process.argv.indexOf('--user');

// console.log(flag);

process.stdout.write('Ask me a question: \n');

process.stdin.on('date', function(answer){

    console.log(answer.toString().trim());

        process.exit();
        
});