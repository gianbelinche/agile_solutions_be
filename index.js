const express = require("express");
const cors = require("cors");
const categorysRoute = require("./routes/categorysRoute");
const productsRoute = require("./routes/productsRoute");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.use(cors());

app.get("/", (req, res) => res.send("Hello from homepage."));

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);

app.use(bodyParser.json());

// project routes
app.use("/categorys", categorysRoute);
app.use("/products", productsRoute);
