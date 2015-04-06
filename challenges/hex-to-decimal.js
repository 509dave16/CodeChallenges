var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var hex = parseInt(line,16);
        console.log(hex);
    }
});