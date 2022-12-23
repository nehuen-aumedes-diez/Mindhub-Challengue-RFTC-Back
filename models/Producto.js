const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    tipo: {type: String, required: true},
    nombre: {type: String, required: true},
    foto1: {type: String, required: true},
    foto2: {type: String, required: true},
    talle: [{type: String, required: true}],
    descripcion: {type: String, required: true},
    stock: [{type: Number, required: true}],
    precio: {type: Number, required: true},
})

const Producto = mongoose.model('productos', schema)
module.exports = Producto