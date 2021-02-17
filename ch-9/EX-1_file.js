var fs = require('fs');
fs.stat(__dirname + '/demo.txt',function(err, stats){
    if(err){throw err;}
    console.log(stats.size);
    });
    
