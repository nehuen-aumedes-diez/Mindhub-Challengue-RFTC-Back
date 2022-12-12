const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().messages({
    "any.required": "Complete this input"
  }),

  photo: joi.string().required().uri().messages({
    "any.required": "Complete this input",
    "string.empty": "Enter the photo URL",
  }),

});

module.exports = schema;
