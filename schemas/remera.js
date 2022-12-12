const joi = require("joi");

const schema = joi.object({
  nombre: joi.string().required().messages({
    "any.required":"el campo es obligatorio",
  }),
  foto1: joi.string().required().uri().messages({
    "any.required": "Complete this input",
    "string.empty": "Enter the photo URL",
  }),
  foto2: joi.string().required().uri().messages({
    "any.required": "Complete this input",
    "string.empty": "Enter the photo URL",
  }),
  talle: joi.string().required().messages({
    "any.required":"el campo es obligatorio",
  }),
  descripcion: joi.string().required().messages({
    "any.required":"el campo es obligatorio",
  }),
  stock: joi.number().required().messages({
    "any.required":"el campo es obligatorio",
  })
});

module.exports = schema;