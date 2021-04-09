const express = require("express");
const router = express.Router();
const tasksCtrl = require("../controllers/tasks");

// remove 'tasks' from route when we specify in the server
router.get("/tasks", tasksCtrl.index);
router.get("/tasks/:id", tasksCtrl.show);
router.get("/tasks/new", tasksCtrl.new);
router.post("/tasks", tasksCtrl.create);
router.delete("/tasks/:id", tasksCtrl.delete);

module.exports = router;
