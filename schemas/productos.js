const joi = require("joi");

const schema = joi.object({
  nombre: joi.string().required().messages({
    "any.required":"el campo nombre es obligatorio",
  }),
  tipo: joi.string().required().messages({
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
  talle: joi.array().required().messages({
    "any.required":"el campo talle es obligatorio",
  }),
  descripcion: joi.string().required().messages({
    "any.required":"el campo descripcion es obligatorio",
  }),
  stock: joi.array().required().messages({
    "any.required":"el campo stock es obligatorio",
  }),
  precio: joi.number().required().messages({
    "any.required":"el campo precio es obligatorio",
  })
});

module.exports = schema;
