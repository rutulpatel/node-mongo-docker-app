var express = require("express");
var router = express.Router();
var request = require("request");

var Todo = require("../models/Todo.js");

router.get("/", function(req, res) {
    Todo.find({}, function(err, doc) {
        if(err) {
            console.log(err);
        } else { 
            console.log(doc);
            res.render("index", { todos: doc });
        }
    });
});

router.get("/add", function(req, res) {
    var addTask = {};
    addTask.taskName = "Test1";
    var addTodo = Todo(addTask);
    console.log(req.body);

    addTodo.save(function(err, doc) {
        if(err) {
            console.log(err);
        } else {
            res.render("index", { todo: doc });
        }
    });
});

module.exports = router;