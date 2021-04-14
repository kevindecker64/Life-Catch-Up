const express = require("express");
const router = express.Router();

const peopleCtrl = require("../controllers/people");

router.get("/:id/newPerson", peopleCtrl.new);
router.put("/:id/newPerson", peopleCtrl.create);

module.exports = router;