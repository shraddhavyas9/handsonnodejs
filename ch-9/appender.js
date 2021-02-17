var fs = require('fs');
var startAppender = function(fd, startPos){
  var pos = startPos;
  return{
    append: function(buffer, callback){
      var written = 0;
      var oldPos = pos;
      pos += buffer;
      (function tryWriting(){
         if(written < buffer.length){
            fs.write(fd, buffer, written, buffer.Length - writen, oldPos + written,
            function(err, butesWritten){
            if(err){callback(err);return;}
            written += bytesWritten;
            tryWriting();
            }
            );
            } else{
              callback(null);
              }
              })();
              }
              }
              };
  
