const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.listen(3000, function(){
    console.log("Listening on port 3000...");
});