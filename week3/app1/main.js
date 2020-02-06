//console.log("Hello World");

var a = 5;
var b = a;
b = 6;
a;
b;
//console.log(a);

var a = ['dog','cat'];
//console.log(a[0]);

var a = 99;
var b = '99'
/*
console.log(typeof a);
console.log(typeof b);

console.log(a==b)
console.log(a===b)
*/

var a = 0;
if(a){
    console.log('excute');
}

//console.log(a==false);
//console.log(a===false);


function sayHello(){
    console.log('hello');
}

var f = function sayHi(){
    console.log('hi');
}

var s = function(name){
    console.log('sawasdee '+name);
}

//sayHello();
f();
s('Tony');