const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!");
})

app.get("/dog", function(req, res){
    console.log("Someone made a request to /dog!!!")
    res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res){
    let subreddit = req.params.subredditName.toUpperCase();
    res.send(`WELCOME TO THE ${subreddit} SUBREDDIT`);
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    res.send("WELCOME TO REDDIT");
});

app.get("*", function(req, res){
    res.send("YOU ARE A STAR!!!");
});

app.listen(3000, function(){
    console.log("Server has started!!!")
});