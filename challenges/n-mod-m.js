var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var argArray = line.split(",");
        var n = parseInt(argArray[0]);
        var m = parseInt(argArray[1]);
        var divisionResult = n/m; 
        
        if(n < m)
        {
            console.log(n);
        }
        else if(divisionResult === Math.floor(divisionResult))
        {
            console.log(0)
        }
        else
        {
            while(n > m)
            {
                n -= m;
            }
            console.log(n);
        }
    }
});