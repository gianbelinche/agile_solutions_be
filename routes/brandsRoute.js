const express = require("express");
const brandsController = require("../controllers/brandsController");

const router = express.Router();

router.get("/:product", brandsController.brands_get_by_product);

module.exports = router;
