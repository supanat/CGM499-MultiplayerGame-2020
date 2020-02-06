
let add = function(a,b){
    return a+b
}



let multiply = function(a,b){
    return a*b
}
let calc = function(v1,v2,callback){
    return callback(v1,v2);
}

console.log(calc(2,5,add))

console.log(calc(2,5,function(a,b){
    return a-b
}));
