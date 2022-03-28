const mongoose = require("mongoose");

/**
 * @typedef {Object} Customer
 * @property {string} name
 * @property {string} phone
 * @property {string} email
 * @property {string} address
 */

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    // TODO: email validation
  },
  address: {
    type: String,
  },
});

/**
 * @typedef CustomerModel
 */
const CustomerModel = mongoose.model("Customer", customerSchema);
module.exports = CustomerModel;
