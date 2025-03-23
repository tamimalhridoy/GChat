const express = require("express");
const router = express.Router();
const apiRoute = require("./api");

// router.use(process.env.API_ROUTE, apiRoute);
router.use("/api/V1", apiRoute);

router.use((req, res) => {
  res.status(400).send("Page not found!");
});

module.exports = router;
