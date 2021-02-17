var fs = require('fs');
fs.stat('demo.txt',function(err,stats){
   if(err){
      console.log(err.message);return;}
      console.log(stats);
      console.log('this file is ' +stats.size + 'bytes long');
      });
       
   
