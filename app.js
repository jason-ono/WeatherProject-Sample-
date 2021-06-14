// suppress warning
// jshint esversion:6

const express = require("express");
// no need to install https, native module for node.js
const https = require("https");

const app = express();

app.get("/", function(req,res){
  res.send("Server is up and running");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
