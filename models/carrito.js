const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    foto1: {type: String, required: true},
    stock: {type: Number, required: true},
    talle: {type: Number, required: true},
    precio: {type: Number, required: true},
    idProducto: {type: mongoose.Types.ObjectId, ref: "product", required: true},
    userId:{type: mongoose.Types.ObjectId, ref: "users", required: true},
    estadoCompra: {type:String, required:true}
})

const Producto = mongoose.model('Producto',schema)
module.exports = Producto