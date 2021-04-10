const express = require("express");
const router = express.Router();

const tasksCtrl = require("../controllers/tasks");

// remove 'tasks' from route when we specify in the server
// router.get("/", tasksCtrl.index);
// router.get("/:id", tasksCtrl.show);
router.get("/new", tasksCtrl.new);
// router.post("/", tasksCtrl.create);
// router.delete("/:id", tasksCtrl.delete);

module.exports = router;
