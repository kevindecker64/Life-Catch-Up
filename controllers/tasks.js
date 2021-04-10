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
  });
  res.redirect("/tasks");
}

function deleteOne(req, res) {
  Task.findByIdAndRemove(req.params.id, function(err) {
    if (err) return res.redirect("/tasks/show");
  });
  res.redirect("/tasks");
}

function edit(req, res) {
  Task.findById(req.params.id, function (err, task) {
    if (err) return res.redirect("/tasks/show");
    res.render("tasks/edit", { title: "Edit Task", task});
  });
}

function update(req, res) {
  console.log("works");
  Task.findByIdAndUpdate(req.params.id, req.body)
    // function (err) {
    // if (err) return res.redirect("/");
  // });
  res.redirect("/tasks");
}
