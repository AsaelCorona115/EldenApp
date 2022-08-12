// Imports
const express = require("express");
const router = express.Router();

router.get("/", () => {
  console.log("Someone made a request");
});

module.exports = router;
