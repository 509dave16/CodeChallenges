var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var elements = line.split(",");
        var uniqueElements = [];
        var lastUniqueElement = "";
        for(var elementIndex = 0; elementIndex < elements.length; elementIndex++)
        {
            var currentElement = elements[elementIndex];
            if(currentElement !== lastUniqueElement)
            {
                uniqueElements.push(currentElement);
                lastUniqueElement = currentElement;
            }
        }
        var uniqueElementsLine = uniqueElements.join(",");
        console.log(uniqueElementsLine);
    }
});