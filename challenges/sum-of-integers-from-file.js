var fs  = require("fs");
var sum = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        sum += parseInt(line);
    }
});
console.log(sum);