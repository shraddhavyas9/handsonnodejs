var open = false;

 setTimeout(function() {
 open = true;
 console.log("o", open)
 }, 2000)

 while(!open) {
  wait
 }

 console.log('opened!');