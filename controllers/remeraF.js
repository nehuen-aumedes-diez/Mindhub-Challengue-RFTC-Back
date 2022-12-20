const Remera = require('../models/CamisetaMujer')

const controller = {

    create: async (req, res) => {
        try {
            let newRemera = await Remera.create(req.body)
            res.status(201).json({
                stock: newRemera.stock,
                success: true,
                message: "Se cargo el articulo de manera exitosa"
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
            let todasRemeras = await Remera.find(query).sort(order)
            if (todasRemeras){
                res.status(200).json({
                    res: todasRemeras,
                    success: true,
                    message: "Se encontraron remeras de manera exitosa"
                })
            }
            else{
                res.status(404).json({
                    success: false,
                    message: "No se encontraron remeras, intente de nuevo!"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    readOne: async (req, res) => {
        let id = req.params.id;
        try {
            let findRemera = await Remera.findOne({ _id: id });
            if (findRemera) {
                res.status(200).json({
                    message: "Remera encontrada",
                    response: findRemera,
                    success: true,
                });
            } else {
                res.status(404).json({
                    message: "No se puede encontrar la Remerar",
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
            let RemeraU = await Remera.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (RemeraU) {
                res.status(200).json({
                    id: RemeraU._id,
                    success: true,
                    message: "se modificaron los datos de la remera de manera exitosa"
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: "no se encontro la remera"
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
            let RemeraD = await Remera.findOneAndDelete({ _id: id })
            if (RemeraD) {
                res.status(200).json({
                    id: RemeraD._id,
                    success: true,
                    message: "se elimino la remera de manera exitosa"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no se encontro la remera"
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