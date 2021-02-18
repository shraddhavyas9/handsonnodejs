var http = require('http');
var events = require('events').EventEmitter;
var eventEmitter = new events();

require('net').createServer(function(socket) {
    // new connection
    socket.on('data', function(data) {
        eventEmitter.emit('data',data)
    });
}).listen(4000);

require('http').createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.on('data', function(data) {
        res.write(data);
    });
    
}).listen(4002);