const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let campgrounds = [
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/82/225912054_690e32830d.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/82/225912054_690e32830d.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"},
    {name: "Granite Hill", image: "https://farm1.staticflickr.com/82/225912054_690e32830d.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(3000, function(){
    console.log("The YelpCamp Server Has Started!")
})