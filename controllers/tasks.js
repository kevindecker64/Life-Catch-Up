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
  Task.find({}, function(err, tasks) {
    res.render('tasks/index', {title: 'All Tasks', tasks});
  })
}

function show(req, res) {}

function newTask(req, res) {
  console.log("I am runnning the new Task function!")
  res.render("tasks/new", { title: "Add Tasks" });
}

function create(req, res) {}

function deleteOne(req, res) {}
