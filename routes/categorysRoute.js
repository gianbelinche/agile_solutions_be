const express = require("express");
const categorysController = require("../controllers/categorysController");

const router = express.Router();

router.get("/", categorysController.categorys_get_all);

module.exports = router;
