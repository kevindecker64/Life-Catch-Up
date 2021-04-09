const express = require("express");
const router = expres.Router();
const choresCtrl = require("../controllers/chores");

// remove 'chores' from route when we specify in the server
router.get("/chores", choresCtrl.index);
router.get("/chores/:id", choresCtrl.show);
router.get("/chores/new", choresCtrl.new);
router.post("/chores", choresCtrl.create);
router.delete("/chores/:id", choresCtrl.delete);

module.exports = router;