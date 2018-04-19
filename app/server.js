// set up dependencies
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');

// set up express app
var app = express();

// Heroku doesn't always run off the local port
var PORT = process.env.PORT || 3000;

// express will handle data parsing
app.unsubscribe(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// declarative server routing via express yeeha
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
});

// this route is to send the survey to the page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
});

// route for submit the survey data to the friend.js 
app.get("/results", function (req, res) {

    // show Modal
    $('#myModal').modal('show');

    //return res.json(characters);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

