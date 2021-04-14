const express = require("express");
const router = express.Router();

const Task = require("../models/task");

module.exports = {
  index,
  show,
  new: newTask,
  create,
  delete: deleteOne,
  edit,
  update,
  hobbiesIndex,
  choresIndex,
};

function index(req, res) {
  Task.find({}, function (err, tasks) {
    res.render("tasks/index", { title: "All Tasks", tasks });
  });
}

function show(req, res) {
  Task.findById(req.params.id, function (err, task) {
    res.render("tasks/show", { title: "Task Details", task });
  });
}

function newTask(req, res) {
  res.render("tasks/new", { title: "Add Tasks" });
}

function create(req, res) {
  const task = new Task(req.body);
  task.save(function (err) {
    if (err) return res.redirect("/tasks/new");
    index(req, res);
  });
}

function deleteOne(req, res) {
  Task.findByIdAndRemove(req.params.id, function (err) {
    if (err) return res.redirect("/tasks/show");
    index(req, res);
  });
}

function edit(req, res) {
  Task.findById(req.params.id, function (err, task) {
    if (err) return res.redirect("/tasks/show");
    res.render("tasks/edit", { title: "Edit Task", task });
  });
}

function update(req, res) {
  Task.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        type: req.body.type,
        category: req.body.category,
        priority: req.body.priority,
        difficulty: req.body.difficulty,
        length: req.body.length,
        people: req.body.people,
      },
    },
    function (err, task) {
      if (err) return res.redirect("/tasks/edit");
      show(req, res);
    }
  );
}

function hobbiesIndex(req, res){
  Task.find({}, function (err, tasks) {
    res.render("tasks/hobbies", { title: "Hobbies", tasks });
  });
}

function choresIndex(req, res){
  Task.find({}, function (err, tasks) {
    res.render("tasks/chores", { title: "Chores", tasks });
  });
}
