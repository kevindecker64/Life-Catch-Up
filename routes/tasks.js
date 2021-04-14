const express = require("express");
const router = express.Router();

const tasksCtrl = require("../controllers/tasks");

router.get("/new", tasksCtrl.new);
router.get("/hobbies", tasksCtrl.hobbiesIndex);
router.get("/chores", tasksCtrl.choresIndex);
router.get("/", tasksCtrl.index);
router.get("/:id", tasksCtrl.show);
router.get("/:id/edit", tasksCtrl.edit);
router.post("/", tasksCtrl.create);
router.put("/:id", tasksCtrl.update);
router.delete("/:id", tasksCtrl.delete);

module.exports = router;
