const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    foto1: {type: String, required: true},
    foto2: {type: String, required: true},
    talle: [{type: String, required: true}],
    descripcion: {type: String, required: true},
    stock: [{type: Number, required: true}],
    precio: {type: Number, required: true},
})

const Buzo = mongoose.model('buzos',schema)
module.exports = Buzo