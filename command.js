let fs = require('fs');
let request = require('request');

let done = function(output) {
    process.stdout.write(output);

    setTimeout(function () {
        process.stdout.write('\nprompt > ');
    }, 1000);
}

module.exports = {
    pwd: function() {
        let directory = process.cwd() //process.chdir();
        done(directory);
    },
    date: function() {
        let newDate = new Date();
        done(newDate.toDateString());
    },
    exit: function() {
        process.exit();
    },
    ls: function() {
         let newString = '\n';

        fs.readdir('.', function(err, files) {
            if (err) throw err;
            
            //process.stdout.write('\n');

            files.forEach(function(file) {
                newString += (file.toString() + ' ');
                
            })

            done(newString);
        });

        
    },
    echo: function(string) {
        done(string + "\n")
    },
    cat: function(string) {
        fs.readFile(string, function read(err, data) {
            if (err) { throw err; }
            done(data);
        });
    },
    tail: function(string, length) {

    },
    head: function(string, length) {

    },
    curl: function() {

    }
}





