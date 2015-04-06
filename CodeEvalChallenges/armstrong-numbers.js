var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var number = parseInt(line);
        var digits = line.split("");
        var sumOfPowerResults = 0;
        for(var digitIndex = 0; digitIndex < digits.length; digitIndex++)
        {
            var digit = parseInt(digits[digitIndex]);
            var powerResult = Math.pow(digit, digits.length);
            sumOfPowerResults += powerResult;
        }
        if(sumOfPowerResults === number)
        {
            console.log("True");
        }
        else
        {
            console.log("False");
        }
    }
});