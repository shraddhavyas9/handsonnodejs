var fs = require('fs'); // get the fs module
 var readStream = fs.createReadStream('./shraddha.txt');
 readStream.on('data', function(data) {
 console.log(data.toString());
 });
 readStream.on('end', function() {
 console.log('file ended');
 });
