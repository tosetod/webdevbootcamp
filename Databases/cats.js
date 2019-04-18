const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true });

let catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

let Cat = mongoose.model("Cat", catSchema);

// let george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if (err) {
//         console.log("something went wrong");
//     } else {
//         console.log("Cat succesfully inserted.");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Sika",
    age: 14,
    temperament: "Bland"
}, function(err, cat){
    if (err) {
        console.log(err);
    } else {
        console.log(cat);

    }
});

Cat.find({}, function(err, cats){
    if (err) {
        console.log("Error!");
        console.log(err);
    } else {
        console.log("All the cats...");
        console.log(cats);
    }
});