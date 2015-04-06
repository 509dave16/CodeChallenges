var fs = require("fs");
var stats = fs.statSync(process.argv[2]);
var fileSizeInBytes = stats["size"];
console.log(fileSizeInBytes);