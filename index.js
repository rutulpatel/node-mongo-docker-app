/**
 * Main index.js file
 */

 var PORT = process.env.PORT || 3000;

 var http = require("http");
 var express = require("express");
 var mongoose = require("mongoose");
 var request = require("request");
 var path = require("path");
 var bodyParser = require("body-parser");
 var exphbs = require("express-handlebars");


var app = express();
app.server = http.createServer(app);

// Database config
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/sample_app");
var db = mongoose.connection;

// print error if there's issue with db connection
db.on("error", function(err) {
    console.log("Mongoose error:" , err);
});

// check if db connection was successful
db.once("open", function(){
    console.log("Mongoose connection successful");
});

//server static route
app.use(express.static(path.join(__dirname, "/public")));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.server.listen(PORT, function() {
    console.log("app started on port " + PORT);
});

module.exports.app;
