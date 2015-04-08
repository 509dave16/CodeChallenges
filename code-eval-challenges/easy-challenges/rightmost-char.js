var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var argsArray = line.split(",");
        var contentStr = argsArray[0];
        var searchStr = argsArray[1];
        var indexFoundAt = -1;
        for(var index = contentStr.length; index > -1; index--)
        {
            if(contentStr[index] === searchStr)
            {
                indexFoundAt = index;
                break;
            }
        }
        console.log(indexFoundAt);
    }
});