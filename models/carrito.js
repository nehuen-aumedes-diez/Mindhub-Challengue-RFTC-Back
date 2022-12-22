const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    foto1: {type: String, required: true},
    stock: {type: Number, required: true},
    talle: {type: Number, required: true},
    precio: {type: Number, required: true},
    idProducto: {type: mongoose.Types.ObjectId, ref: "productos", required: true},
    userId:{type: mongoose.Types.ObjectId, ref: "users", required: true},
    estadoCompra: {type:String, required:true}
})

const Carrito = mongoose.model('carrito',schema)
module.exports = Carrito