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
app.use(express.static(path.join(__dirname, "/public")));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.server.listen(PORT, function() {
    console.log("app started on port " + PORT);
});

module.exports.app;
