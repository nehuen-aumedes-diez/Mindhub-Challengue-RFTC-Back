const Gorra = require('../models/gorra')

const controller = {

    create: async (req, res) => {
        try {
            let newGorra = await Gorra.create(req.body)
            res.status(201).json({
                stock: newGorra.stock,
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
            let todasGorras = await Gorra.find(query).sort(order)
            if (todasGorras){
                res.status(200).json({
                    res: todasGorras,
                    success: true,
                    message: "Se encontraron gorras de manera exitosa"
                })
            }
            else{
                res.status(404).json({
                    success: false,
                    message: "No se encontraron gorras, intente de nuevo!"
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
            let findGorra = await Gorra.findOne({ _id: id });
            if (findGorra) {
                res.status(200).json({
                    message: "Gorra encontrada",
                    response: findGorra,
                    success: true,
                });
            } else {
                res.status(404).json({
                    message: "No se puede encontrar la gorrar",
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
            let GorraU = await Gorra.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (GorraU) {
                res.status(200).json({
                    id: GorraU._id,
                    success: true,
                    message: "se modificaron los datos del Gorra de manera exitosa"
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: "no se encontro el Gorra"
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
            let GorraD = await Gorra.findOneAndDelete({ _id: id })
            if (GorraD) {
                res.status(200).json({
                    id: GorraD._id,
                    success: true,
                    message: "se elimino la gorra de manera exitosa"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no se encontro la gorra"
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
