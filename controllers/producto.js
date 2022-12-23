const Producto = require('../models/Producto')

const controller = {

    create: async (req, res) => {
        try {
            let newProducto = await Producto.create(req.body)
            res.status(201).json({
                stock: newProducto.stock,
                success: true,
                message: "se cargo el articulo de manera exitosa"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    read: async (req, res) => {
        let query = {}
        let order = {}

        if (req.query.order) {
            order = { precio: req.query.order }
        }

        if (req.query.userId) {
            query = {
                ...query,
                userId: req.query.userId
            }
        }
        if (req.query._id) {
            query = {
                ...query,
                _id: req.query._id
            }
        }
        if (req.query.nombre) {
            query = {
                ...query,
                nombre: { $regex: req.query.nombre, $options: "i"}
            }
        }
        if (req.query.tipo) {
            query = {
                ...query,
                tipo: { $regex: req.query.tipo, $options: "i"}
            }
        }
        try {
            let todosProductos = await Producto.find(query).sort(order)
            if (todosProductos){
                res.status(200).json({
                    res: todosProductos,
                    success: true,
                    message: "Se encontraron productos de manera exitosa"
                })
            }
            else{
                res.status(404).json({
                    success: false,
                    message: "No se encontraron productos, intente de nuevo!"
                })
            }
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
    },
    readOne: async (req, res) => {
        let id = req.params.id;
        try {
            let findProducto = await Producto.findOne({ _id: id });
            if (findProducto) {
                res.status(200).json({
                    message: "producto encontrado",
                    response: findProducto,
                    success: true,
                });
            } else {
                res.status(404).json({
                    message: "No se puede encontrar el producto",
                    success: false,
                });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: error.message,
                success: false,
            });
        }
    },
    update: async (req, res) => {
        let { id } = req.params
        try {
            let productoU = await Producto.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (productoU) {
                res.status(200).json({
                    id: productoU._id,
                    success: true,
                    message: "se modificaron los datos del producto de manera exitosa"
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: "no se encontro el producto"
                })
            }

        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
    },
    destroy: async (req, res) => {
        let { id } = req.params
        try {
            let productoD = await Producto.findOneAndDelete({ _id: id })
            if (productoD) {
                res.status(200).json({
                    id: productoD._id,
                    success: true,
                    message: "se elimino el producto de manera exitosa"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no se encontro el producto"
                })
            }
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
    }

}

module.exports = controller