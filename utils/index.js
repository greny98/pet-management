const express = require("express");
/**
 * TODO: Phone validation
 */

/**
 * TODO: Email validation
 */

/**
 * TODO: Hash password
 */

/**
 * Wrap async function
 * @param {function(Request, Response, *=): void} fn
 * @returns {(function(Request, Response, *=): void)|*}
 */
module.exports.wrapAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
