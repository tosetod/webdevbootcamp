const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    let sound = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof"
    }
    let animal = req.params.animal.toLowerCase();
    if (sound[animal]) {
        res.send(`The ${animal} says '${sound[animal]}'`); 
    } 
    else res.send(`The animal ${animal} is unrecognised`);
    // res.send(`The ${animal} is unrecognised`);
  
});

app.get("/repeat/:word/:iterator", function(req, res){
    let str = req.params.word;
    let iter = parseInt(req.params.iterator);
    let result = " ";
    for (let i = 0; i < iter; i++) {
        result += str + " ";
    }
    res.send(`${result}`);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function(){
    console.log("Listening on port 3000");
});