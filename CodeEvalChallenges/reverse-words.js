var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var answer_line = line.split(" ").reverse().join(" ").trim();
        console.log(answer_line);
    }
});