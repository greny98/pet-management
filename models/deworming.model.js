const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

/**
 * @typedef {Object} Deworming
 * @property {Types.ObjectId | Pet} pet
 * @property {Date} date
 */

const dewormingSchema = new mongoose.Schema({
  pet: {
    type: Types.ObjectId,
    ref: "Pet",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

/**
 * @typedef DewormingModel
 */
const DewormingModel = mongoose.model("Deworming", dewormingSchema);
module.exports = DewormingModel;
