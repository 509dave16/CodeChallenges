var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var setStrs = line.split(";");
        var set1Str = setStrs[0];
        var set1 = set1Str.split(",");
        var set2Str = setStrs[1];
        var set2 = set2Str.split(",");
        var combinedSet = set1.concat(set2);
        var integerInstances = {};
        var intersectionAra = [];
        for(var index = 0; index < combinedSet.length; index++)
        {
            var integerStr = combinedSet[index];
            if(!integerInstances.hasOwnProperty(integerStr))
            {
                integerInstances[integerStr] = 1;
            }
            else
            {
               intersectionAra.push(parseInt(integerStr));
            }
        }
        var intersectionStr = intersectionAra.sort().join(",");
        console.log(intersectionStr);
    }
});