var fs = require('fs');

var filePath = process.argv[2];
var lineCount = undefined;

function getNumLines(callback) {
    fs.readFile(filePath, function doneReading(err, fileContents) {
        lineCount = fileContents.toString().split('\n').length - 1;
        callback();
    })
};

function logLineCount() {
    console.log(lineCount);
};

getNumLines(logLineCount);