const emitter = require('./module/sendemail');


emitter.on('emailEvent', (message) =>
{

    console.log('Email: ${message}');

});

emitter.emit('emailEvent', 'Send activation email to user after registration');