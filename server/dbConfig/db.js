const mongoose = require("mongoose");

const dbConfig = () => {
  return mongoose
    .connect(process.env.DB_CONECTION_STRING)
    .then(() => console.log("DB Connected!"));
};

module.exports = dbConfig;

// MAwfFH9t2DJcTehJ
