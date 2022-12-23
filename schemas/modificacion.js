const joi = require("joi");

const schemaUpdate = joi.object({
  nombre: joi.string().required().messages({
    "any.required":"el campo nombre es obligatorio",
  }),
  foto1: joi.string().required().uri().messages({
    "any.required": "el campo foto1 es obligatorio",
    "string.empty": "Coloca el URL de la foto",
  }),
  foto2: joi.string().required().uri().messages({
    "any.required": "el campo foto2 es obligatorio",
    "string.empty": "Coloca el URL de la foto",
  }),
  precio: joi.number().required().messages({
    "any.required":"el campo precio es obligatorio",
  }), 
  stock: joi.array().required().messages({
    "any.required":"el campo stock es obligatorio",
  }), 
});

module.exports = schemaUpdate;
