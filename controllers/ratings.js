const express = require("express");
const router = express.Router();

const Task = require("../models/task");

module.exports = {
  new: newRating,
  create,
};

function newRating(req, res) {
  Task.findById(req.params.id, function (err, task) {
    res.render(`tasks/rating`, { title: "Add Rating", task });
  });
}

function create(req, res) {
  console.log("THIS IS WORKING!!!!!!!")
  Task.findById(req.params.id, function (err, task) {
    task.ratings.push(req.body);
    task.save(function (err) {
      res.redirect(`task/${task._id}`);
    });
  });
}
