// Imports
const express = require("express");
const router = require("./routes/items");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Initializing App using express
const app = express();

// Middleware

//Allows for cross origin cors requests during development
app.use(cors());
//Checks if there's anything in the body and attaches it to the request object
app.use(express.json());

//Logs the path and method of the request made to the server
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routing
app.use("", router);

//Connecting to the DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Starting Server
    app.listen(process.env.PORT, () => {
      console.log(
        "Hello Tarnished, you are connected to the DB on port " +
          process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
