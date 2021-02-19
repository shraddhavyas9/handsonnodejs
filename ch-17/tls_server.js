var tls = require('tls');
 fs = require('fs');
 options = {
 key : fs.readFileSync('/path/to/my/server_private_key.pem'),
 cert : fs.readFileSync('/path/to/my/server_certificate.pem')
 };

 tls.createServer(options, function(s) {
 s.pipe(s);
 }).listen(4000);