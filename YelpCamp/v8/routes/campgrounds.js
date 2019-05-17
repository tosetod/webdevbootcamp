const express = require("express");
const router = express.Router();
const Campground = require("../models/campground");

//INDEX - show all campgrounds
router.get("/", function(req, res){
    Campground.find({}, function(err, campgrounds){
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: campgrounds});
        }
    });
});

//CREATE - add new campground to database
router.post("/",isLoggedIn, function(req, res){
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let author = {
        id: req.user._id,
        username: req.user.username       
    };
    let newCampground = {name: name, image: image, description: desc, author: author};
    Campground.create(newCampground, function(err, newlyCreated){
        if (err) {
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.redirect("/campgrounds");
        }
    });
});

//NEW - show form to create new campground
router.get("/new",isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if (err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            //render the show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", (req, res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            res.render("campgrounds/edit", {campground: foundCampground});
        };
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCampground) => {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        };
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", (req, res) => {
    res.send("delete");
});

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = router;
