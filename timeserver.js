var net = require('net');

var port = process.argv[2];

var server = net.createServer(function (socket) {
    var dateStr = returnDate();
    socket.end(dateStr);
});

function returnDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    var day = date.getDate();
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var dateString = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + '\n'
    return dateString;
}

server.listen(port);