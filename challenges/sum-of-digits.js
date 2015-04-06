var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var digits = line.split("");
        var sumOfDigits = 0;
        for(var index = 0;  index < digits.length; index++)
        {
            sumOfDigits += parseInt(digits[index]);
        }
        console.log(sumOfDigits);
    }
});