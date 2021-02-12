var buffer1 = new Buffer(100);
var slice = new Buffer(20);
var targetstart = 0;
    sourcestart = 40;
    sourseend = 60;
buffer1.copy(slice, targetstart, sourcestart,sourseend);
console.log(buffer1);