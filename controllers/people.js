const express = require("express");
const router = express.Router();

const Task = require("../models/task");

module.exports = {
  new: newPerson,
  create,
};

function newPerson(req, res) {
  Task.findById(req.params.id, function (err, task) {
    res.render("tasks/newPerson", { title: "Add Person", task });
  });
}

function create(req, res) {
  Task.findById(req.params.id, function (err, task) {
    task.people.push(req.body);
    task.save(function (err) {
      console.log(`---Here is the Task ${task}`);
    });
  });
}
