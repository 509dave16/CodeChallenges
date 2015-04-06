var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var integerStr = line;
        var sumOfDigits = parseInt(line);
        var pastIntegers = {};
        var reachedOne = false;
        while(reachedOne !== true)
        {
            if(sumOfDigits === 1)
            {
                reachedOne = true;
            }
            else
            {
                if(pastIntegers.hasOwnProperty(integerStr))
                {
                    sumOfDigits = 0;
                    break;
                }
                else
                {
                  pastIntegers[integerStr] = sumOfDigits;
                }
                
                sumOfDigits = 0;
                for(var digitIndex = 0; digitIndex < integerStr.length; digitIndex++)
                {
                    var digit = parseInt(integerStr[digitIndex]);
                    sumOfDigits += (digit*digit);
                }
                integerStr = "" + sumOfDigits;
            }
        }
        console.log(sumOfDigits);   
    }
});