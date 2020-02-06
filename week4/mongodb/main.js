var mongoose = require('mongoose');
var Schema = mongoose.Schema

var playerSchema = new Schema(
    {
        name: String,
        score: Number
    }
);

mongoose.connect('mongodb://localhost:27017/gamedb1');

var Player = mongoose.model('Player',playerSchema,'player');

var player = new Player({
    name:"seksan",
    score:2000
});
/*
player.save(function(err){
    if(err){
        console.log(err);
    }
});
*/

Player.find({name:"john"},function(err,data){
    if(err){
        console.log(err);
    }

    console.log(data);
});
