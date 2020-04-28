//jshint esversion: 6

const express = require("express");

const bodyParser = require("body-parser");
const https= require("https")
const ejs = require("ejs");
const mongoose=require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost:27017/blogDB", {useNewUrlParser: true, useUnifiedTopology: true});

const postSchema = {
    title: String,
    content: String
  };

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res){
    res.render("home");
});

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
app.get("/compose", function(req, res){
    res.render("compose");
});

app.get("/post", function(req, res){
    res.render("post");
});

app.get("/subscribe-success", function(req, res){
    res.render("subscribe-success");
});

app.listen(3000, function(){
    console.log("Server is up and running baby!");
})

