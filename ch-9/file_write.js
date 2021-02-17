var fs = require('fs');

fs.open('demo.txt','a',function(err, fd){
 var writeBuffer = new Buffer("write this book"),
     bufferOffset = 0,
     bufferLength = writeBuffer.length,
     filePosition = null;
     
 fs.write(
           fd,
           writeBuffer,
           bufferOffset,
           bufferLength,
           filePosition,
           function(err, written){
            if(err){ throw err;}
            console.log('wrote' + written + 'bytes');
            }
            );
            });
            
