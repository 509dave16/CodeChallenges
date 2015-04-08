var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var seriesCount = parseInt(line);
        var fibonacciNumber = 0;
        if(seriesCount < 2)
        {
            fibonacciNumber = seriesCount;
        }
        else
        {
            var lastTwoFN = [0,1];
            for(var count = 1; count < seriesCount; count++)
            {
                var nextFN = lastTwoFN[0] + lastTwoFN[1];
                lastTwoFN.shift();
                lastTwoFN.push(nextFN);
            }
            fibonacciNumber = lastTwoFN[1];
        }
        console.log(fibonacciNumber);
    }
});