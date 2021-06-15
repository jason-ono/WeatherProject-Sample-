// suppress warning
// jshint esversion:6

const express = require("express");
// native module for node.js
const https = require("https");

const app = express();
// for being a native module, no need to install https

app.get("/", function(req,res){
  // dealing with long URLs: set it as a constant
  const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious";
  https.get(url, function(response){
    console.log(response.statusCode);
  });
  // res.send("Server is up and running");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
