 var fs = require("fs")
/*
 console.log('program started')
 var data = fs.readFileSync('input.txt')
 console.log(data.toString());
 console.log('program ended')
 */

console.log('program started')

fs.readFile("input.txt",function(err,data){
    if(err)
        console.log(err)
    
    console.log(data.toString())

});


console.log('program ended')



