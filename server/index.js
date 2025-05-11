const express = require("express");
const dbConfig = require("./dbConfig/db");
const router = require("./routes");
const app = express();
require("dotenv").config();
dbConfig();
app.use(router);

app.listen(3000, () => console.log("Server is runnings"));
