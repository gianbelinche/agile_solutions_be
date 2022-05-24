/* If this was a database, the category_get_all shoul perform a SQL Query to the Table Categorys */
const { Categorys } = require("../models/categorys");

const categorys_get_all = (req, res) => {
  res.status(200).send(Categorys);
};

module.exports = { categorys_get_all };
