const express = require("express");
const dataController = require("../controllers/dataController");

const router = express.Router();

router.get("/:brand", dataController.data_get_by_brand);

module.exports = router;
