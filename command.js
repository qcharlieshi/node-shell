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
    curl: function(string) {
        console.log(string);
        request(string, function (err, response, body) {
            if (err) { console.log(err); throw err; }

            //console.log(response);
            if (response.statusCode === 200) {
                done(body)// Show the HTML for the Google homepage. 
            }
        })
    }
}

''.split.call(data)




