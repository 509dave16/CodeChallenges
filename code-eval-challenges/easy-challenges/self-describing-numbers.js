var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var integerInstances = {};
        var isSelfDescribing = 1;
        for(var index = 0; index < line.length; index++)
        {
            var integerStr = line[index];
            if(integerInstances.hasOwnProperty(integerStr))
            {
                integerInstances[integerStr] += 1;
            }
            else
            {
                integerInstances[integerStr] = 1;
            }
        }
        
        for(var number = 0; number < line.length; number++)
        {
            var numberKey = "" + number;
            var instances = parseInt(line[number]);
            if(integerInstances.hasOwnProperty(numberKey))
            {
                var actualInstances = integerInstances[numberKey];
                if(instances !== actualInstances)
                {
                    isSelfDescribing = 0;
                    break;
                }
            }
            else if(instances !== 0)
            {
                isSelfDescribing = 0;
                break;
            }
        }
        
        console.log(isSelfDescribing);
        
    }
});