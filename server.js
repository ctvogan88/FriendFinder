// set up dependencies
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var app = express();

// Heroku doesn't always run off the local port
var PORT = process.env.PORT || 5000;

// express will handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up routing js files
require("./app/routing/apiRoutes.js")(app);
//require("./app/routing/htmlRoutes.js")(app);
//var friendList = require("./data/friends.js");

// ROUTES -----------------------------------------------------------------

// declarative server routing via express
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

// this route is to send the survey to the page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});


// route to submit the survey data to the friend.js 
app.get("/finderInfo", function (req, res) {

    // show Modal
    //$('#myModal').modal('show');

    //return res.json(characters);
});


// Create New Finder - takes in JSON input
app.post("/api/newFinder", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFinder = req.body;
  
    //console.log(newFinder);
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //newFinder.name = newFinder.name.replace(/\s+/g, "").toLowerCase();
  
    //console.log(newFinder);
    //console.log(reservations.length);
  
  /* if(reservations.length>4)   {
      waitinglist.push(newFinder);
  
      res.send(false);
  }else{
      reservations.push(newFinder);
      res.send(true); 
  }*/
  //   res.json(newFinder);
  });

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

