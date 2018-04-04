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

//app specific dependencies
var controller = require("./controller");
var Todo = require("./models/Todo.js");

var app = express();
app.server = http.createServer(app);

// Database config
mongoose.Promise = Promise;
// for connecting to local mongodb instance, use localhost; use mongo for docker's linked containers
//mongoose.connect("mongodb://local/sample_app");
mongoose.connect("mongodb://mongo/sample_app");
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

// set views
app.set("views", path.join(__dirname, "/views"));

// set handlebars as view engine
var hbs = exphbs.create({
    layoutsDir: "views/layouts",
    defaultLayout: "main"
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use("/", controller);

app.server.listen(PORT, function() {
    console.log("app started on port " + PORT);
});

module.exports.app;
