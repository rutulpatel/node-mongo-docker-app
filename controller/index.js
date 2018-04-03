var express = require("express");
var router = express.Router();
var request = require("request");

var Todo = require("../models/Todo.js");

router.get("/", function(req, res) {
    Todo.find({}, function(err, doc) {
        if(err) {
            console.log(err);
        } else { 
            res.render("index", { todo: doc });
        }
    });
});

// router.post("/add", function(req, res) {
//     var task = {};
//     task.task = req.body.task;
//     var addTodo = Todo(task);
//     console.log(req.body);

//     addTodo.save(function(err, doc) {
//         if(err) {
//             console.log(err);
//         } else {
//             res.render("index", { todo: doc });
//         }
//     });
// });