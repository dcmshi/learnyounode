var fs = require('fs');
var path = require('path');

module.exports = function (dirName, fileExt, callback) {
    fs.readdir(dirName, function filter(err, files) {
        if (err) {
            return callback(err)
        } else {
            data = files.filter(function(file) {
                if (path.extname(file) === '.' + fileExt) {
                    return true
                }
            })
            return callback(null, data);
        }
    })
}


