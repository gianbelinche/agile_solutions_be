/* If this was a database, the category_get_all shoul perform a SQL Query to the Table Data */
const { Data } = require("../models/data");

const data_get_by_brand = (req, res) => {
  var brand = req.params.brand;
  res.status(200).send(Data[brand]);
};

module.exports = { data_get_by_brand };
