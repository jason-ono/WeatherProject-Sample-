// suppress warning
// jshint esversion:6

const express = require("express");
// native module for node.js
const https = require("https");

const app = express();
// for being a native module, no need to install https

app.get("/", function(req, res) {
  // the index.html in our directry
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});




/*

JSON parsing module

app.get("/", function(req, res) {
  // dealing with long URLs: set it as a constant
  const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious";
  https.get(url, function(response) {
    console.log(response.statusCode);

    // looks thorugh "data", define it as data (a parameter in anon func)
    response.on("data", function(data) {

      // this return HEX representation of JSON string
      // console.log(data);
      // you need to parse it...

      const weatherData = JSON.parse(data);
      const joke1 = weatherData.setup;
      const joke2 = weatherData.delivery;
      res.write("<h1>Here's a funny joke in " + weatherData.category + ".<\h1>");
      res.write("<p>" + joke1 + " ... " + joke2 + "<\p>");
      res.send();
    });
  });
});
*/
