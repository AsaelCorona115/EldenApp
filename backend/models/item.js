const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//The properties Schema can have all the possible properties of any object but no field is required
const properties = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  effect: {
    type: String,
    required: false,
  },
  quote: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
  passive: {
    type: String,
    required: false,
  },
  attackPower: {
    type: [],
    required: false,
  },
});

//The schema defines the structure of a particular document that will go to the database
const itemSchema = new Schema(
  {
    itemType: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    properties: {
      type: properties,
      required: true,
    },
  },
  { timestamps: true }
);

//A model is an instance of a particular schema

module.exports = mongoose.model("Item", itemSchema);
