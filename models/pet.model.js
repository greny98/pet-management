const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

/**
 * @typedef {Object} Pet
 * @property {Types.ObjectId | Customer} customer
 * @property {string} type
 * @property {string} breed
 * @property {string} name
 * @property {string} birthDate
 * @property {string} sex
 * @property {string} color
 * @property {string} img
 * @property {string} weight
 * @property {string} kennel
 */

const petSchema = new mongoose.Schema({
  customer: {
    type: Types.ObjectId,
    ref: "Customer",
  },
  type: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  sex: {
    type: String,
    enum: ["m", "f"],
  },
  color: {
    type: String,
  },
  img: {
    type: String,
  },
  weight: {
    type: Number,
  },
  kennel: Number,
});

/**
 * @typedef PetModel
 */
const PetModel = mongoose.model("Pet", petSchema);
module.exports = PetModel;
