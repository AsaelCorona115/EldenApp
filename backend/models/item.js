const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//The properties Schema can have all the possible properties of any object but no field is required
const properties = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  description: String,
  type: String,
  effect: String,
  effects: String,
  quote: String,
  location: String,
  role: String,
  passive: String,
  attackPower: [],
  category: String,
  dmgNegation: [],
  resistance: [],
  weight: Number,
  drops: [],
  affinity: String,
  skill: String,
  stats: [],
  cost: Number,
  slots: Number,
  requires: [],
  attack: [],
  defence: [],
  requiredAttributes: [],
  scalesWith: [],
  fpCost: Number,
  hpCost: Number,
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
