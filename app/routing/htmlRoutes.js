// set up dependencies
var express = require('express');

// set up express app
var app = express();

console.log('html routes in');

// declarative server routing via express yeeha
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

// this route is to send the survey to the page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});
