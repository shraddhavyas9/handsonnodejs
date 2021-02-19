var https = require('https');
 var options = { host: 'encrypted.google.com', path: '/' };

 https.get(options, function(res) {
 res.on('data', function(d) {
 process.console.log(d.toString());
 });
 