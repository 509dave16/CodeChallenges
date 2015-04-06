var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var argArray = line.split(" ");
        var fizzDivisor = argArray[0];
        var buzzDivisor = argArray[1];
        var seriesLimit = argArray[2];
        var output = "";
        for(var number = 1; number <= seriesLimit; number++)
        {
            var wasDivisible = false;
            if(number % fizzDivisor === 0)
            {
                output += "F";
                wasDivisible = true;
            }
            if(number % buzzDivisor === 0)
            {
                output += "B";
                wasDivisible = true;
            }
            if(!wasDivisible)
            {
                output += number;
            }
            output += " ";
        }
        output = output.trim();
        console.log(output);
    }
});