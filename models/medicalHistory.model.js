const mongoose = require("mongoose");
const Types = mongoose.Schema.Types;

/**
 * @typedef {Object} MedicalHistory
 * @property {Types.ObjectId | User} user
 * @property {Types.ObjectId | Pet} pet
 * @property {Date} date
 * @property {string} desc
 * @property {string} diagnosis
 * @property {Array<string>} action
 * @property {Array<string>} medication
 * @property {string} pos
 * @property {boolean} active
 */

const medicalHistorySchema = new mongoose.Schema({
  user: {
    type: Types.ObjectId,
    ref: "User",
  },
  pet: {
    type: Types.ObjectId,
    ref: "Pet",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  desc: {
    type: String,
    default: "",
  },
  diagnosis: {
    type: String,
    default: "",
  },
  action: [String],
  medication: [String],
  pos: String,
  active: Boolean,
});

/**
 * @typedef MedicalHistoryModel
 */
const MedicalHistoryModel = mongoose.model(
  "MedicalHistory",
  medicalHistorySchema
);
module.exports = MedicalHistoryModel;
