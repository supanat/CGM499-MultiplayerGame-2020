
let x = function(){
    console.log('I am called from inside a function');
}

let b = function(){
    console.log('hello')
}

let y = function(callback){
    callback();
}

y(b);

