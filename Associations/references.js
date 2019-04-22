const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", { useNewUrlParser: true });

//POST -titile, content
let postSchema = new mongoose.Schema({
   title: String,
   content: String
});
let Post = mongoose.model("Post", postSchema);

// USER - email, name
let userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [
       {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Post"
       }
    ]
});
let User = mongoose.model("User", userSchema);

// Post.create({
//     title: "How to cook the best burger part 3",
//     content: "blah blah"
// }, function(err, post){
//     User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//         if (err) {
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             })
//         }
//     });
// }); 

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

// Find user
// find all posts for that user

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
     if (err) {
         console.log(err);
     } else {
        console.log(user);
     }
})

