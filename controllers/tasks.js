const express = require("express");
const router = express.Router();

const Task = require("../models/task");

module.exports = {
  index,
  show,
  new: newTask,
  create,
  delete: deleteOne,
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

function deleteOne(req, res) {}
