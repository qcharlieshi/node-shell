let fs = require('fs');

module.exports = {
    pwd: function() {
        let directory = process.cwd() //process.chdir();
        process.stdout.write(directory);
    },
    date: function() {
        let newDate = new Date();
        process.stdout.write(newDate.toDateString());
    },
    exit: function() {
        process.exit();
    },
    ls: function() {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            
            process.stdout.write('\n');

            files.forEach(function(file) {
                process.stdout.write(file.toString() + '  ');
            })
        });
    },
    echo: function(string) {
        process.stdout.write(string + "\n");
    },
    cat: function(string) {
        fs.readFile(string, function read(err, data) {
            if (err) { throw err; }
            process.stdout.write(data);
        });
    },
    tail: function(string, length) {

    },
    head: function(string, length) {
        
    }
}





