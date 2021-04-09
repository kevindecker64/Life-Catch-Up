const Person = require("../models/person");
const Chore = require("../models/chore");
const Hobby = require("../models/hobby");
const Rating = require("../models/rating");

module.exports = {
  index,
  show,
  new: newPerson,
  create,
  delete: deleteOne,
};

function index(req, res) {}

function show(req, res) {}

function newPerson(req, res) {}

function create(req, res) {}

function deleteOne(req, res) {}
