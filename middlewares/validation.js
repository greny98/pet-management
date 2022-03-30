const Joi = require("joi").extend(require("joi-phone-number"));

module.exports.validation = (schema, field) => (req, res, next) => {
  const { error } = schema.validate(req[field]);
  if (error) {
    const msg = error.details.map((el) => el.message).join("\n");
    return next(new AppError(400, msg));
  }
  next();
};

/**
 * Login body schema
 */
module.exports.loginBody = Joi.object({
  data: Joi.object({
    username: Joi.string().min(8).alphanum().required(),
    password: Joi.string().min(8).required(),
  }),
});

/**
 * Registration body schema
 */
module.exports.regBody = Joi.object({
  data: Joi.object({
    username: Joi.string().min(8).alphanum().required(),
    password: Joi.string().min(8).required(),
    name: Joi.string().min(8).required(),
    phone: Joi.string().phoneNumber({ defaultCountry: "VI" }).required(),
    address: Joi.string().required(),
  }),
});
