const joi = require("joi");

const schema = joi.object({
  nombre: joi.string().required().messages({
    "any.required":"el campo nombre es obligatorio",
  }),
  foto1: joi.string().required().uri().messages({
    "any.required": "el campo foto1 es obligatorio",
    "string.empty": "Coloca el URL de la foto",
  }),
  talle: joi.string().required().messages({
    "any.required":"el campo talle es obligatorio",
  }),
  stock: joi.number().required().messages({
    "any.required":"el campo stock es obligatorio",
  }),
  precio: joi.number().required().messages({
    "any.required":"el campo precio es obligatorio",
  }),
  idProducto: joi.string().required().messages({
    "any.required":"el campo precio es obligatorio",
  }),
  userId: joi.string().required().messages({
    "any.required":"el campo precio es obligatorio",
  })
});

module.exports = schema;