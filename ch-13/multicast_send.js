var dgram = require('dgram');

var client = dgram.createSocket('udp4');

var message = new Buffer('this is a multicast message');

client.setMulticastTTL(10);
client.send(message, 0, message.length, 4000, '239.0.0.0');
client.close();