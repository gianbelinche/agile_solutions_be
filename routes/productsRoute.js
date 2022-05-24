const express = require("express");
const productsController = require("../controllers/productsController");

const router = express.Router();

router.get("/:category", productsController.products_get_by_category);

module.exports = router;
