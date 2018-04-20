// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var tableData = require("./../data/friends");
//var waitListData = require("../data/waitinglistData");

// ===============================================================================
// ROUTING
// ===============================================================================

console.log('api routes in');

module.exports = function (app) {

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.get("/api/tables", function (req, res) {
        res.json(tableData);
    });

    app.post("/api/tables", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body-parser middleware
        if (tableData.length) {
            tableData.push(req.body);
            res.json(true);
        }
    });
};
