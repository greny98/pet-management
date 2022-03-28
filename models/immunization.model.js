const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

/**
 * @typedef {Object} Immunization
 * @property {Types.ObjectId | Pet} pet
 * @property {string} vaccine
 * @property {Date} date
 * @property {Number} age
 * @property {string} unit
 */

const immunizationSchema = new mongoose.Schema({
  vaccine: {
    type: String,
    required: true,
  },
  pet: {
    type: Types.ObjectId,
    ref: "Pet",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  age: {
    type: Number,
    min: 1,
    required: true,
  },
  unit: {
    type: String,
    enum: ["w", "m", "y"],
    default: "w",
  },
});

/**
 * @typedef ImmunizationModel
 */
const ImmunizationModel = mongoose.model("Immunization", immunizationSchema);
module.exports = ImmunizationModel;
