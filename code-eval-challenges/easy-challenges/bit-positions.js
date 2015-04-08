
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var argArray = line.split(",");
        var binaryStr = Number(parseInt(argArray[0])).toString(2);
        var position1 = parseInt(argArray[1]);
        var position2 = parseInt(argArray[2]);
        var same = (binaryStr[binaryStr.length - position1] === binaryStr[binaryStr.length - position2]) ? true : false;
        console.log(same);
    }
});