(function demo(){
     console.log('hello');
})();


function demo(){
    console.log('hello');
}

(function(){
    demo();
})();

var myfun = demo;

demo();
myfun();

