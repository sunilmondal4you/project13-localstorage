/**
 * Created by abc on 16/06/2016.
 */

var express=require("express");
var bodyParser=require("body-parser");

var app=express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a',function(req,res) {
    res.send("Hello TDD! can u here me?");
});

app.get('/a/b',function(req,res) {
    res.send("Hello in the World of team Affixus!")
});

app.get('/a/b/c',function(req,res) {
    res.send("We are team Affixus.")
});

app.get('/a/b/c/d',function(req,res) {
    res.send("Affixus provide next gen Web programing.")
});



app.listen(3001,function () {
    console.log("Server 3001 is started");
});
