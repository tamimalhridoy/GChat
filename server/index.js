const express = require("express");
const dbConfig = require("./dbConfig/db");
const app = express();
require("dotenv").config();
dbConfig();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => console.log("Server is running"));
