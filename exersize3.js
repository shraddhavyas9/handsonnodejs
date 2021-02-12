var buffer1 = new Buffer(100);
for(i=0;i<buffer1.length;i++)
{
    buffer1[i]=i;
}
console.log(buffer1);

var buffer2 = new Buffer(20);
buffer1.copy(buffer2,0,40,60);
console.log(buffer2);