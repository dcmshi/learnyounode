var readandfilter = require('./readandfilter.js');

var filePath = process.argv[2];
var extension = process.argv[3];

function printData(err, data) {
    if (err) {
        throw err
    }
    data.forEach(function (datum) {
        console.log(datum)
    })
}

readandfilter(filePath, extension, printData)