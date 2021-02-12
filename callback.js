function mydisplayer(){
    console.log(sum);
}

function mycalculator(num1, num2, callback)
{
    let sum = num1 + num2;
    callback(sum);
}

mycalculator(5 , 5, mydisplayer);