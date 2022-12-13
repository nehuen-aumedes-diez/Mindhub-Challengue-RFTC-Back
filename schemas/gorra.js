const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().messages({
    "any.required": "el campo es obligatorio"
  }),

  photo: joi.string().required().uri().messages({
    "any.required": "el campo es obligatorio",
    "string.empty": "Coloca el URL de la foto"
  }),

});

module.exports = schema;
