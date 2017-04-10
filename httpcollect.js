var bl = require('bl');
var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
    response.pipe(bl(function (err, data) {
        var stringData = data.toString();
        console.log(stringData.length);
        console.log(stringData);
    }));
})
