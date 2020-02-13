var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var playerSchema = new Schema(
    {
        name: String,
        score: Number
    }
);

mongoose.connect('mongodb://localhost:27017/gamedb1');

var Player = mongoose.model('Player',playerSchema,'player');


var app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',function(req,res){

    res.send('<h1>hello</h1>')
});

app.post('/player',function(req,res){

    fs.readFile(__dirname+"/player.json",function(err,data){
        if(err){
            console.log('error')
        }

        res.end(data)
    });
});

app.post('/player/register',function(req,res){

    var p = req.body
    console.log(req.body)

    var player = new Player({
        name:p.name,
        score:p.score
    });

    player.save(function(err){
        if(err){
            console.log(err);
        }
    });



    res.end('{"ok":1}')
});


app.get('/leaderboard',function(req,res){

    res.send('<h1>Leaderboard</h1>')
});

app.get('/leaderboard/2019',function(req,res){

    res.send('<h1>Leaderboard 2019</h1>')
});



app.listen(8080,function(){
    console.log('Server running')
});

console.log('start server')
