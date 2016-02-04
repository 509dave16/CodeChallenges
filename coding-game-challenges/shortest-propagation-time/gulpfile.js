var gulp  = require('gulp');
var shell = require('gulp-shell');

var relativeDir = './input-files/';
var fileNamePrefix = 'spt-test-in.';
var fileExtension = '.txt';
var nodeCommand = 'node shortest-propagation-time-test.js';
var commands = [];

for(var index = 0; index < 10; index++) {
    var inputFileArgument = relativeDir + fileNamePrefix + index + fileExtension;
    commands[index] = nodeCommand + ' ' + inputFileArgument;
}
 
gulp.task('default', shell.task(commands));