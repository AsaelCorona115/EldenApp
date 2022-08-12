// Imports
const express = require("express");
const router = require("./routes/items");
require("dotenv").config();

// Initializing App using express
const app = express();

// Middleware
app.use("", router);

// Starting Server
app.listen(process.env.PORT, () => {
  console.log("Hello Tarnished!");
});
