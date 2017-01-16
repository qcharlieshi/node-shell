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
}





