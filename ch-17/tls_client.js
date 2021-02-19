var tls = require('tls'),
    fs = require('fs'),
    port = 3000,
    host = 'myhost.com',
    options = {
        key : fs.readFileSync('./my.pem'),
        cert : fs.readFileSync('./my_csr.pem')
    };

    var client = tls.connect(port,host,options,function(){
        console.log('connected');
        console.log('authorized:' + client.authorized);
        cilent.on('data',function(data){
            client.write(data);
        });
    });
