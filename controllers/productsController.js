/* If this was a database, the category_get_all shoul perform a SQL Query to the Table Products */
const { Products } = require("../models/products");

const products_get_by_category = (req, res) => {
  var category = req.params.category;
  console.log("category: ", category);
  res.status(200).send(Products[category]);
};

module.exports = { products_get_by_category };
