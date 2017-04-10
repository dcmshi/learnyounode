var http = require('http');
var bl = require('bl');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var stringData = [];
var asyncCount = 0;

for (var i = 0; i < 3; i++) {
    httpGet(i);
}

function httpGet(index) {
    http.get(urls[index], function(response) {
        response.pipe(bl(function (err, data) {
            stringData[index] = data.toString();
            asyncCount += 1;

            if (asyncCount == 3) {
                printData()
            }
        }))
    })
}

function printData() {
    for (var i = 0; i < 3; i++) {
        console.log(stringData[i]);
    }    
}
