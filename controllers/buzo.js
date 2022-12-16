const Buzo = require('../models/buzo')

const controller = {

    create: async (req, res) => {
        try {
            let newBuzo = await Buzo.create(req.body)
            res.status(201).json({
                stock: newBuzo.stock,
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
        try {
            let todosBuzos = await Buzo.find(query).sort(order)
            if (todosBuzos){
                res.status(200).json({
                    res: todosBuzos,
                    success: true,
                    message: "Se encontraron buzos de manera exitosa"
                })
            }
            else{
                res.status(404).json({
                    success: false,
                    message: "No se encontraron buzos, intente de nuevo!"
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
            let findBuzo = await Buzo.findOne({ _id: id });
            if (findBuzo) {
                res.status(200).json({
                    message: "Buzo encontrado",
                    response: findBuzo,
                    success: true,
                });
            } else {
                res.status(404).json({
                    message: "No se puede encontrar el Buzo",
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
            let BuzoU = await Buzo.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (BuzoU) {
                res.status(200).json({
                    id: BuzoU._id,
                    success: true,
                    message: "se modificaron los datos del buzo de manera exitosa"
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: "no se encontro el Buzo"
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
            let BuzoD = await Buzo.findOneAndDelete({ _id: id })
            if (BuzoD) {
                res.status(200).json({
                    id: BuzoD._id,
                    success: true,
                    message: "se elimino el buzo de manera exitosa"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no se encontro el Buzo"
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