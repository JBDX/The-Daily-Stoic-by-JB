//jshint esversion: 6

const express = require("express");

const bodyParser = require("body-parser");
const https= require("https")

const app = express()

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/home", function (req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});
app.get("/sources", function(req, res){
    res.render("sources");
});
app.get("/copyright", function(req, res){
    res.render("copyright");
});
app.get("/language", function(req, res){
    res.render("language");
});
app.get("/subscribe", function(req, res){
    res.render("subscribe");
});



app.listen(3000, function(){
    console.log("Server is up and running baby!");
})

