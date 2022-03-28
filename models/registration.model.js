const mongoose = require("mongoose");

/**
 * @typedef {Object} Registration
 * @property {string} username
 * @property {string} password
 * @property {string} name
 * @property {string} phone
 * @property {string} address
 */

const registrationSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 8,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    // TODO: Phone validation
  },
  address: {
    type: String,
  },
});

/**
 * @typedef RegistrationModel
 */
const RegistrationModel = mongoose.model("Registration", registrationSchema);
module.exports = RegistrationModel;
