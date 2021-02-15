var util = require('util'),
    EventEmitter = require('events').EventEmitter;
    
    var Ticker = function(){
    var a = this;
    setInterval(function(){
      a.emit('tick');
      },1000);
      console.log(ticker);
      };
      
