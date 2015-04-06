var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var argArray = line.split(",");
        var number = parseInt(argArray[0]);
        var multipleNumber = parseInt(argArray[1]);
        var answer = 0;
        if(multipleNumber >= number)
        {
            answer = multipleNumber;
        }
        else
        {
            var sumOfMultiples = multipleNumber;
            while(sumOfMultiples < number)
            {
                sumOfMultiples += multipleNumber;
            }
            answer = sumOfMultiples;
        }
        console.log(answer);
    }
});