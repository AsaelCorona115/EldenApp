// Imports

//General express imports
const express = require("express");
const router = express.Router();

//Models
const GeneralItem = require("../models/item");

//userAuthentication
const requireAuth = require("../middleware/requireAuth");

//Controllers
const {
  saveNewItem,
  getAllItems,
  unsaveItem,
} = require("../controllers/itemControllers");

//require Authentication for all users
router.use(requireAuth);
//Routes
//Get all items
router.get("/", getAllItems);

// Post a new item to the DB
router.post("/", saveNewItem);

//Delete an item from the DB
router.delete("/:id", unsaveItem);

module.exports = router;
