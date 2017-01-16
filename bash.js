// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line

let commands = require('./command.js');
//let userInput = '';



process.stdin.on('data', function (data) {
  let cmd = data.toString().trim(); // remove the newline

  commands[cmd]();

//   switch(cmd) {
//       case 'pwd': commands[]
//   }

  //process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});


