const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello</h1");
});

app.get("/contact",function(req,res){
    res.send("Contact me at: manavi@gmail.com");
});

app.get("/about",function(req,res){
    res.send("This is Manavi, I am Computer Engineering Student who loves web development!" );
});

app.listen(3000,function(){
    console.log("Server started...listening to port 3000");
});
