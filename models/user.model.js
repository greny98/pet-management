const mongoose = require("mongoose");

/**
 * @typedef {Object} User
 * @property {string} username
 * @property {string} password
 * @property {boolean} admin
 * @property {string} name
 * @property {string} phone
 * @property {string} address
 */

const userSchema = new mongoose.Schema({
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
  admin: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
  },
});

/**
 * @typedef UserModel
 */
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
