const express = require("express");
const router = express.Router();

const tasksCtrl = require("../controllers/tasks");

// remove 'tasks' from route when we specify in the server
router.get("/new", tasksCtrl.new);
router.get("/", tasksCtrl.index);
router.get("/:id", tasksCtrl.show);
router.post("/", tasksCtrl.create);
router.get("/:id/edit", tasksCtrl.edit);
router.put("/:id", tasksCtrl.update);
router.delete("/:id", tasksCtrl.delete);

module.exports = router;
