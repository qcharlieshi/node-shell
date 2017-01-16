// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line

let commands = require('./command.js');



process.stdin.on('data', function (data) {
    let cmd = data.toString().trim(); // remove the newline


    if (cmd.indexOf(' ') !== -1) {
        let splitStringAry = cmd.split(' ');
        
        //commands[splitStringAry.shift()](splitStringAry.join(' '));
        //console.log(...splitStringAry + " ary log ");
        commands[splitStringAry.shift()](...splitStringAry);
        
    } else {
        commands[cmd]();
    }

    

    setTimeout(function () {
        process.stdout.write('\nprompt > ');
    }, 1000);

});


