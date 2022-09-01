const mongoose = require("mongoose");

//Items models
const GeneralItem = require("../models/item");

//Get All Items
const getAllItems = async (req, res) => {
  const allItems = await GeneralItem.find({}).sort({ createdAt: -1 });
  res.status(200).json(allItems);
};

//Save new item
const saveNewItem = async (req, res) => {
  //Deconstructs properties from the information sent in the body of the req object
  //All objects have an item type, id, name and image
  const { itemType, id, name, image, description, properties } = req.body;

  //Creates a new document on the in the DB
  try {
    //It has to be an async function
    const item = await GeneralItem.create({
      itemType,
      id,
      name,
      image,
      description,
      properties,
    });

    //Returns a response with a status of 200 and the new created object in the body of the
    //response
    res.status(200).json(item);

    //   //if there was an error returns status of 400 and a message of what the error was
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete Item from saved items
const unsaveItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id type" });
  }
  const item = await GeneralItem.findByIdAndDelete({ _id: id });
  if (!item) {
    return res
      .status(400)
      .json({ error: "There's no object saved with that id" });
  }
  res.status(200).json(item);
};
module.exports = {
  saveNewItem,
  getAllItems,
  unsaveItem,
};
