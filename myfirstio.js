var fs = require('fs');

var filePath = process.argv[2];
var fileBuffer = fs.readFileSync(filePath);
var numLines = fileBuffer.toString().split('\n').length - 1;
console.log(numLines);