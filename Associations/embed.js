 const mongoose = require("mongoose");
 mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true });

 //POST -titile, content
 let postSchema = new mongoose.Schema({
    title: String,
    content: String
});
let postModel = mongoose.model("Post", postSchema);

 // USER - email, name
let userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
let User = mongoose.model("User", userSchema);


 
//  let newUser = new User({
//      email: "hermione@hogwarts.edu",
//      name: "Hermione Granger"
//  });
//  newUser.posts.push({
//      title: "How to bre polyjuice potion",
//      content: "Just kidding. Go to potions class to learn it!" 
//  });
//  newUser.save(function(err, user){
//      if (err) {
//          console.log(err);
//      } else {
//          console.log(user);
//      }
//  });

// let newPost = new postModel({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });
// newPost.save(function(err, post){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name: "Hermione Granger"}, function(err, user){
    if (err) {
        //console.log(err);
    } else {
        user.posts.push({
            title: "Three things I really hate",
            content: "Voldermort"
        });
        user.save(function(err, user){
            if (err) {
                console.log(err);
            } else {
                console.log(user);
            }
        })
    }
});