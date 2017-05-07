var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var fileLoc = process.argv[3];

var server = http.createServer(function(req, res) {
    var strm = fs.createReadStream(fileLoc);
    strm.pipe(res);
});

server.listen(port);