var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var extension = '.' + process.argv[3];


function filterFile(err, files) {
    for (var i = 0; i < files.length; i++) {
        if (path.extname(files[i]) === extension) {
            console.log(files[i]);
        };
    };
};

fs.readdir(filePath, filterFile);

