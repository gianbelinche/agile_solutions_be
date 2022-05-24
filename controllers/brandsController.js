/* If this was a database, the category_get_all shoul perform a SQL Query to the Table Brands */
const { Brands } = require("../models/brands");

const brands_get_by_product = (req, res) => {
  var product = req.params.product;
  res.status(200).send(Brands[product]);
};

module.exports = { brands_get_by_product };
